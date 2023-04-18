# `azurestack_linux_virtual_machine`

Refer to the Terraform Registory for docs: [`azurestack_linux_virtual_machine`](https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine).

# `linuxVirtualMachine` Submodule <a name="`linuxVirtualMachine` Submodule" id="@cdktf/provider-azurestack.linuxVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LinuxVirtualMachine <a name="LinuxVirtualMachine" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine azurestack_linux_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachine;

LinuxVirtualMachine.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .adminUsername(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .networkInterfaceIds(java.util.List<java.lang.String>)
    .osDisk(LinuxVirtualMachineOsDisk)
    .resourceGroupName(java.lang.String)
    .size(java.lang.String)
//  .additionalCapabilities(LinuxVirtualMachineAdditionalCapabilities)
//  .adminPassword(java.lang.String)
//  .adminSshKey(IResolvable)
//  .adminSshKey(java.util.List<LinuxVirtualMachineAdminSshKey>)
//  .allowExtensionOperations(java.lang.Boolean)
//  .allowExtensionOperations(IResolvable)
//  .availabilitySetId(java.lang.String)
//  .bootDiagnostics(LinuxVirtualMachineBootDiagnostics)
//  .computerName(java.lang.String)
//  .customData(java.lang.String)
//  .disablePasswordAuthentication(java.lang.Boolean)
//  .disablePasswordAuthentication(IResolvable)
//  .encryptionAtHostEnabled(java.lang.Boolean)
//  .encryptionAtHostEnabled(IResolvable)
//  .evictionPolicy(java.lang.String)
//  .extensionsTimeBudget(java.lang.String)
//  .id(java.lang.String)
//  .licenseType(java.lang.String)
//  .maxBidPrice(java.lang.Number)
//  .plan(LinuxVirtualMachinePlan)
//  .priority(java.lang.String)
//  .provisionVmAgent(java.lang.Boolean)
//  .provisionVmAgent(IResolvable)
//  .secret(IResolvable)
//  .secret(java.util.List<LinuxVirtualMachineSecret>)
//  .sourceImageId(java.lang.String)
//  .sourceImageReference(LinuxVirtualMachineSourceImageReference)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LinuxVirtualMachineTimeouts)
//  .virtualMachineScaleSetId(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#admin_username LinuxVirtualMachine#admin_username}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#location LinuxVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#network_interface_ids LinuxVirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#resource_group_name LinuxVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#size LinuxVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.additionalCapabilities">additionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#admin_password LinuxVirtualMachine#admin_password}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.adminSshKey">adminSshKey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>></code> | admin_ssh_key block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.allowExtensionOperations">allowExtensionOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#allow_extension_operations LinuxVirtualMachine#allow_extension_operations}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.availabilitySetId">availabilitySetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#availability_set_id LinuxVirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.computerName">computerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#computer_name LinuxVirtualMachine#computer_name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.customData">customData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#custom_data LinuxVirtualMachine#custom_data}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.disablePasswordAuthentication">disablePasswordAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#disable_password_authentication LinuxVirtualMachine#disable_password_authentication}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#encryption_at_host_enabled LinuxVirtualMachine#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#eviction_policy LinuxVirtualMachine#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.extensionsTimeBudget">extensionsTimeBudget</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#extensions_time_budget LinuxVirtualMachine#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#id LinuxVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#license_type LinuxVirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.maxBidPrice">maxBidPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#max_bid_price LinuxVirtualMachine#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.priority">priority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#priority LinuxVirtualMachine#priority}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.provisionVmAgent">provisionVmAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#provision_vm_agent LinuxVirtualMachine#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.secret">secret</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>></code> | secret block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.sourceImageId">sourceImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#source_image_id LinuxVirtualMachine#source_image_id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.sourceImageReference">sourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#tags LinuxVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#virtual_machine_scale_set_id LinuxVirtualMachine#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#zone LinuxVirtualMachine#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.adminUsername"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#admin_username LinuxVirtualMachine#admin_username}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#location LinuxVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}.

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.networkInterfaceIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#network_interface_ids LinuxVirtualMachine#network_interface_ids}.

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.osDisk"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#os_disk LinuxVirtualMachine#os_disk}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#resource_group_name LinuxVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.size"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#size LinuxVirtualMachine#size}.

---

##### `additionalCapabilities`<sup>Optional</sup> <a name="additionalCapabilities" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.additionalCapabilities"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#additional_capabilities LinuxVirtualMachine#additional_capabilities}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.adminPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#admin_password LinuxVirtualMachine#admin_password}.

---

##### `adminSshKey`<sup>Optional</sup> <a name="adminSshKey" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.adminSshKey"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>>

admin_ssh_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#admin_ssh_key LinuxVirtualMachine#admin_ssh_key}

---

##### `allowExtensionOperations`<sup>Optional</sup> <a name="allowExtensionOperations" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.allowExtensionOperations"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#allow_extension_operations LinuxVirtualMachine#allow_extension_operations}.

---

##### `availabilitySetId`<sup>Optional</sup> <a name="availabilitySetId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.availabilitySetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#availability_set_id LinuxVirtualMachine#availability_set_id}.

---

##### `bootDiagnostics`<sup>Optional</sup> <a name="bootDiagnostics" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.bootDiagnostics"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#boot_diagnostics LinuxVirtualMachine#boot_diagnostics}

---

##### `computerName`<sup>Optional</sup> <a name="computerName" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.computerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#computer_name LinuxVirtualMachine#computer_name}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.customData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#custom_data LinuxVirtualMachine#custom_data}.

---

##### `disablePasswordAuthentication`<sup>Optional</sup> <a name="disablePasswordAuthentication" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.disablePasswordAuthentication"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#disable_password_authentication LinuxVirtualMachine#disable_password_authentication}.

---

##### `encryptionAtHostEnabled`<sup>Optional</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.encryptionAtHostEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#encryption_at_host_enabled LinuxVirtualMachine#encryption_at_host_enabled}.

---

##### `evictionPolicy`<sup>Optional</sup> <a name="evictionPolicy" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.evictionPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#eviction_policy LinuxVirtualMachine#eviction_policy}.

---

##### `extensionsTimeBudget`<sup>Optional</sup> <a name="extensionsTimeBudget" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.extensionsTimeBudget"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#extensions_time_budget LinuxVirtualMachine#extensions_time_budget}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#id LinuxVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.licenseType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#license_type LinuxVirtualMachine#license_type}.

---

##### `maxBidPrice`<sup>Optional</sup> <a name="maxBidPrice" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.maxBidPrice"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#max_bid_price LinuxVirtualMachine#max_bid_price}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.plan"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#plan LinuxVirtualMachine#plan}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.priority"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#priority LinuxVirtualMachine#priority}.

---

##### `provisionVmAgent`<sup>Optional</sup> <a name="provisionVmAgent" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.provisionVmAgent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#provision_vm_agent LinuxVirtualMachine#provision_vm_agent}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.secret"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#secret LinuxVirtualMachine#secret}

---

##### `sourceImageId`<sup>Optional</sup> <a name="sourceImageId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.sourceImageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#source_image_id LinuxVirtualMachine#source_image_id}.

---

##### `sourceImageReference`<sup>Optional</sup> <a name="sourceImageReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.sourceImageReference"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#source_image_reference LinuxVirtualMachine#source_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#tags LinuxVirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#timeouts LinuxVirtualMachine#timeouts}

---

##### `virtualMachineScaleSetId`<sup>Optional</sup> <a name="virtualMachineScaleSetId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.virtualMachineScaleSetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#virtual_machine_scale_set_id LinuxVirtualMachine#virtual_machine_scale_set_id}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#zone LinuxVirtualMachine#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putAdditionalCapabilities">putAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putAdminSshKey">putAdminSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putBootDiagnostics">putBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putOsDisk">putOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putPlan">putPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putSourceImageReference">putSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetAdditionalCapabilities">resetAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetAdminSshKey">resetAdminSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetAllowExtensionOperations">resetAllowExtensionOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetAvailabilitySetId">resetAvailabilitySetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetBootDiagnostics">resetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetComputerName">resetComputerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetCustomData">resetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetDisablePasswordAuthentication">resetDisablePasswordAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetEncryptionAtHostEnabled">resetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetEvictionPolicy">resetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetExtensionsTimeBudget">resetExtensionsTimeBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetMaxBidPrice">resetMaxBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetPlan">resetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetProvisionVmAgent">resetProvisionVmAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetSourceImageId">resetSourceImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetSourceImageReference">resetSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetVirtualMachineScaleSetId">resetVirtualMachineScaleSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAdditionalCapabilities` <a name="putAdditionalCapabilities" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putAdditionalCapabilities"></a>

```java
public void putAdditionalCapabilities(LinuxVirtualMachineAdditionalCapabilities value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putAdditionalCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a>

---

##### `putAdminSshKey` <a name="putAdminSshKey" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putAdminSshKey"></a>

```java
public void putAdminSshKey(IResolvable OR java.util.List<LinuxVirtualMachineAdminSshKey> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putAdminSshKey.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>>

---

##### `putBootDiagnostics` <a name="putBootDiagnostics" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putBootDiagnostics"></a>

```java
public void putBootDiagnostics(LinuxVirtualMachineBootDiagnostics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putBootDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a>

---

##### `putOsDisk` <a name="putOsDisk" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putOsDisk"></a>

```java
public void putOsDisk(LinuxVirtualMachineOsDisk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a>

---

##### `putPlan` <a name="putPlan" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putPlan"></a>

```java
public void putPlan(LinuxVirtualMachinePlan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putSecret"></a>

```java
public void putSecret(IResolvable OR java.util.List<LinuxVirtualMachineSecret> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putSecret.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>>

---

##### `putSourceImageReference` <a name="putSourceImageReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putSourceImageReference"></a>

```java
public void putSourceImageReference(LinuxVirtualMachineSourceImageReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putSourceImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putTimeouts"></a>

```java
public void putTimeouts(LinuxVirtualMachineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a>

---

##### `resetAdditionalCapabilities` <a name="resetAdditionalCapabilities" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetAdditionalCapabilities"></a>

```java
public void resetAdditionalCapabilities()
```

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetAdminPassword"></a>

```java
public void resetAdminPassword()
```

##### `resetAdminSshKey` <a name="resetAdminSshKey" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetAdminSshKey"></a>

```java
public void resetAdminSshKey()
```

##### `resetAllowExtensionOperations` <a name="resetAllowExtensionOperations" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetAllowExtensionOperations"></a>

```java
public void resetAllowExtensionOperations()
```

##### `resetAvailabilitySetId` <a name="resetAvailabilitySetId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetAvailabilitySetId"></a>

```java
public void resetAvailabilitySetId()
```

##### `resetBootDiagnostics` <a name="resetBootDiagnostics" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetBootDiagnostics"></a>

```java
public void resetBootDiagnostics()
```

##### `resetComputerName` <a name="resetComputerName" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetComputerName"></a>

```java
public void resetComputerName()
```

##### `resetCustomData` <a name="resetCustomData" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetCustomData"></a>

```java
public void resetCustomData()
```

##### `resetDisablePasswordAuthentication` <a name="resetDisablePasswordAuthentication" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetDisablePasswordAuthentication"></a>

```java
public void resetDisablePasswordAuthentication()
```

##### `resetEncryptionAtHostEnabled` <a name="resetEncryptionAtHostEnabled" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetEncryptionAtHostEnabled"></a>

```java
public void resetEncryptionAtHostEnabled()
```

##### `resetEvictionPolicy` <a name="resetEvictionPolicy" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetEvictionPolicy"></a>

```java
public void resetEvictionPolicy()
```

##### `resetExtensionsTimeBudget` <a name="resetExtensionsTimeBudget" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetExtensionsTimeBudget"></a>

```java
public void resetExtensionsTimeBudget()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetId"></a>

```java
public void resetId()
```

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetLicenseType"></a>

```java
public void resetLicenseType()
```

##### `resetMaxBidPrice` <a name="resetMaxBidPrice" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetMaxBidPrice"></a>

```java
public void resetMaxBidPrice()
```

##### `resetPlan` <a name="resetPlan" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetPlan"></a>

```java
public void resetPlan()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProvisionVmAgent` <a name="resetProvisionVmAgent" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetProvisionVmAgent"></a>

```java
public void resetProvisionVmAgent()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetSecret"></a>

```java
public void resetSecret()
```

##### `resetSourceImageId` <a name="resetSourceImageId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetSourceImageId"></a>

```java
public void resetSourceImageId()
```

##### `resetSourceImageReference` <a name="resetSourceImageReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetSourceImageReference"></a>

```java
public void resetSourceImageReference()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirtualMachineScaleSetId` <a name="resetVirtualMachineScaleSetId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetVirtualMachineScaleSetId"></a>

```java
public void resetVirtualMachineScaleSetId()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachine;

LinuxVirtualMachine.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachine;

LinuxVirtualMachine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachine;

LinuxVirtualMachine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.additionalCapabilities">additionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference">LinuxVirtualMachineAdditionalCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.adminSshKey">adminSshKey</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList">LinuxVirtualMachineAdminSshKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference">LinuxVirtualMachineBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference">LinuxVirtualMachineOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference">LinuxVirtualMachinePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.privateIpAddresses">privateIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.publicIpAddresses">publicIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList">LinuxVirtualMachineSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageReference">sourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference">LinuxVirtualMachineSourceImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference">LinuxVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.additionalCapabilitiesInput">additionalCapabilitiesInput</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.adminSshKeyInput">adminSshKeyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.adminUsernameInput">adminUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.allowExtensionOperationsInput">allowExtensionOperationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.availabilitySetIdInput">availabilitySetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.bootDiagnosticsInput">bootDiagnosticsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.computerNameInput">computerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.customDataInput">customDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.disablePasswordAuthenticationInput">disablePasswordAuthenticationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.encryptionAtHostEnabledInput">encryptionAtHostEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.evictionPolicyInput">evictionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.extensionsTimeBudgetInput">extensionsTimeBudgetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.licenseTypeInput">licenseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.maxBidPriceInput">maxBidPriceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.networkInterfaceIdsInput">networkInterfaceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.osDiskInput">osDiskInput</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.planInput">planInput</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.provisionVmAgentInput">provisionVmAgentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.secretInput">secretInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.sizeInput">sizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageIdInput">sourceImageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageReferenceInput">sourceImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineScaleSetIdInput">virtualMachineScaleSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.allowExtensionOperations">allowExtensionOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.availabilitySetId">availabilitySetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.computerName">computerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.customData">customData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.disablePasswordAuthentication">disablePasswordAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.extensionsTimeBudget">extensionsTimeBudget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.maxBidPrice">maxBidPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.provisionVmAgent">provisionVmAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageId">sourceImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalCapabilities`<sup>Required</sup> <a name="additionalCapabilities" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.additionalCapabilities"></a>

```java
public LinuxVirtualMachineAdditionalCapabilitiesOutputReference getAdditionalCapabilities();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference">LinuxVirtualMachineAdditionalCapabilitiesOutputReference</a>

---

##### `adminSshKey`<sup>Required</sup> <a name="adminSshKey" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.adminSshKey"></a>

```java
public LinuxVirtualMachineAdminSshKeyList getAdminSshKey();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList">LinuxVirtualMachineAdminSshKeyList</a>

---

##### `bootDiagnostics`<sup>Required</sup> <a name="bootDiagnostics" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.bootDiagnostics"></a>

```java
public LinuxVirtualMachineBootDiagnosticsOutputReference getBootDiagnostics();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference">LinuxVirtualMachineBootDiagnosticsOutputReference</a>

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.osDisk"></a>

```java
public LinuxVirtualMachineOsDiskOutputReference getOsDisk();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference">LinuxVirtualMachineOsDiskOutputReference</a>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.plan"></a>

```java
public LinuxVirtualMachinePlanOutputReference getPlan();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference">LinuxVirtualMachinePlanOutputReference</a>

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.privateIpAddresses"></a>

```java
public java.util.List<java.lang.String> getPrivateIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `publicIpAddresses`<sup>Required</sup> <a name="publicIpAddresses" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.publicIpAddresses"></a>

```java
public java.util.List<java.lang.String> getPublicIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.secret"></a>

```java
public LinuxVirtualMachineSecretList getSecret();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList">LinuxVirtualMachineSecretList</a>

---

##### `sourceImageReference`<sup>Required</sup> <a name="sourceImageReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageReference"></a>

```java
public LinuxVirtualMachineSourceImageReferenceOutputReference getSourceImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference">LinuxVirtualMachineSourceImageReferenceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.timeouts"></a>

```java
public LinuxVirtualMachineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference">LinuxVirtualMachineTimeoutsOutputReference</a>

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

---

##### `additionalCapabilitiesInput`<sup>Optional</sup> <a name="additionalCapabilitiesInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.additionalCapabilitiesInput"></a>

```java
public LinuxVirtualMachineAdditionalCapabilities getAdditionalCapabilitiesInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `adminSshKeyInput`<sup>Optional</sup> <a name="adminSshKeyInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.adminSshKeyInput"></a>

```java
public java.lang.Object getAdminSshKeyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>>

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.adminUsernameInput"></a>

```java
public java.lang.String getAdminUsernameInput();
```

- *Type:* java.lang.String

---

##### `allowExtensionOperationsInput`<sup>Optional</sup> <a name="allowExtensionOperationsInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.allowExtensionOperationsInput"></a>

```java
public java.lang.Object getAllowExtensionOperationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilitySetIdInput`<sup>Optional</sup> <a name="availabilitySetIdInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.availabilitySetIdInput"></a>

```java
public java.lang.String getAvailabilitySetIdInput();
```

- *Type:* java.lang.String

---

##### `bootDiagnosticsInput`<sup>Optional</sup> <a name="bootDiagnosticsInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.bootDiagnosticsInput"></a>

```java
public LinuxVirtualMachineBootDiagnostics getBootDiagnosticsInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a>

---

##### `computerNameInput`<sup>Optional</sup> <a name="computerNameInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.computerNameInput"></a>

```java
public java.lang.String getComputerNameInput();
```

- *Type:* java.lang.String

---

##### `customDataInput`<sup>Optional</sup> <a name="customDataInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.customDataInput"></a>

```java
public java.lang.String getCustomDataInput();
```

- *Type:* java.lang.String

---

##### `disablePasswordAuthenticationInput`<sup>Optional</sup> <a name="disablePasswordAuthenticationInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.disablePasswordAuthenticationInput"></a>

```java
public java.lang.Object getDisablePasswordAuthenticationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionAtHostEnabledInput`<sup>Optional</sup> <a name="encryptionAtHostEnabledInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.encryptionAtHostEnabledInput"></a>

```java
public java.lang.Object getEncryptionAtHostEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `evictionPolicyInput`<sup>Optional</sup> <a name="evictionPolicyInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.evictionPolicyInput"></a>

```java
public java.lang.String getEvictionPolicyInput();
```

- *Type:* java.lang.String

---

##### `extensionsTimeBudgetInput`<sup>Optional</sup> <a name="extensionsTimeBudgetInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.extensionsTimeBudgetInput"></a>

```java
public java.lang.String getExtensionsTimeBudgetInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.licenseTypeInput"></a>

```java
public java.lang.String getLicenseTypeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maxBidPriceInput`<sup>Optional</sup> <a name="maxBidPriceInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.maxBidPriceInput"></a>

```java
public java.lang.Number getMaxBidPriceInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdsInput`<sup>Optional</sup> <a name="networkInterfaceIdsInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.networkInterfaceIdsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `osDiskInput`<sup>Optional</sup> <a name="osDiskInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.osDiskInput"></a>

```java
public LinuxVirtualMachineOsDisk getOsDiskInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a>

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.planInput"></a>

```java
public LinuxVirtualMachinePlan getPlanInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `provisionVmAgentInput`<sup>Optional</sup> <a name="provisionVmAgentInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.provisionVmAgentInput"></a>

```java
public java.lang.Object getProvisionVmAgentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.secretInput"></a>

```java
public java.lang.Object getSecretInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>>

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.sizeInput"></a>

```java
public java.lang.String getSizeInput();
```

- *Type:* java.lang.String

---

##### `sourceImageIdInput`<sup>Optional</sup> <a name="sourceImageIdInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageIdInput"></a>

```java
public java.lang.String getSourceImageIdInput();
```

- *Type:* java.lang.String

---

##### `sourceImageReferenceInput`<sup>Optional</sup> <a name="sourceImageReferenceInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageReferenceInput"></a>

```java
public LinuxVirtualMachineSourceImageReference getSourceImageReferenceInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `virtualMachineScaleSetIdInput`<sup>Optional</sup> <a name="virtualMachineScaleSetIdInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineScaleSetIdInput"></a>

```java
public java.lang.String getVirtualMachineScaleSetIdInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `allowExtensionOperations`<sup>Required</sup> <a name="allowExtensionOperations" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.allowExtensionOperations"></a>

```java
public java.lang.Object getAllowExtensionOperations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilitySetId`<sup>Required</sup> <a name="availabilitySetId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.availabilitySetId"></a>

```java
public java.lang.String getAvailabilitySetId();
```

- *Type:* java.lang.String

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

---

##### `customData`<sup>Required</sup> <a name="customData" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

---

##### `disablePasswordAuthentication`<sup>Required</sup> <a name="disablePasswordAuthentication" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.disablePasswordAuthentication"></a>

```java
public java.lang.Object getDisablePasswordAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionAtHostEnabled`<sup>Required</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.encryptionAtHostEnabled"></a>

```java
public java.lang.Object getEncryptionAtHostEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.evictionPolicy"></a>

```java
public java.lang.String getEvictionPolicy();
```

- *Type:* java.lang.String

---

##### `extensionsTimeBudget`<sup>Required</sup> <a name="extensionsTimeBudget" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.extensionsTimeBudget"></a>

```java
public java.lang.String getExtensionsTimeBudget();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maxBidPrice`<sup>Required</sup> <a name="maxBidPrice" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.maxBidPrice"></a>

```java
public java.lang.Number getMaxBidPrice();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.networkInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `provisionVmAgent`<sup>Required</sup> <a name="provisionVmAgent" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.provisionVmAgent"></a>

```java
public java.lang.Object getProvisionVmAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

##### `sourceImageId`<sup>Required</sup> <a name="sourceImageId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageId"></a>

```java
public java.lang.String getSourceImageId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualMachineScaleSetId`<sup>Required</sup> <a name="virtualMachineScaleSetId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineScaleSetId"></a>

```java
public java.lang.String getVirtualMachineScaleSetId();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LinuxVirtualMachineAdditionalCapabilities <a name="LinuxVirtualMachineAdditionalCapabilities" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineAdditionalCapabilities;

LinuxVirtualMachineAdditionalCapabilities.builder()
//  .ultraSsdEnabled(java.lang.Boolean)
//  .ultraSsdEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled">ultraSsdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#ultra_ssd_enabled LinuxVirtualMachine#ultra_ssd_enabled}. |

---

##### `ultraSsdEnabled`<sup>Optional</sup> <a name="ultraSsdEnabled" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled"></a>

```java
public java.lang.Object getUltraSsdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#ultra_ssd_enabled LinuxVirtualMachine#ultra_ssd_enabled}.

---

### LinuxVirtualMachineAdminSshKey <a name="LinuxVirtualMachineAdminSshKey" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineAdminSshKey;

LinuxVirtualMachineAdminSshKey.builder()
    .publicKey(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#public_key LinuxVirtualMachine#public_key}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#username LinuxVirtualMachine#username}. |

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#public_key LinuxVirtualMachine#public_key}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#username LinuxVirtualMachine#username}.

---

### LinuxVirtualMachineBootDiagnostics <a name="LinuxVirtualMachineBootDiagnostics" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineBootDiagnostics;

LinuxVirtualMachineBootDiagnostics.builder()
    .storageAccountUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics.property.storageAccountUri">storageAccountUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#storage_account_uri LinuxVirtualMachine#storage_account_uri}. |

---

##### `storageAccountUri`<sup>Required</sup> <a name="storageAccountUri" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics.property.storageAccountUri"></a>

```java
public java.lang.String getStorageAccountUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#storage_account_uri LinuxVirtualMachine#storage_account_uri}.

---

### LinuxVirtualMachineConfig <a name="LinuxVirtualMachineConfig" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineConfig;

LinuxVirtualMachineConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .adminUsername(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .networkInterfaceIds(java.util.List<java.lang.String>)
    .osDisk(LinuxVirtualMachineOsDisk)
    .resourceGroupName(java.lang.String)
    .size(java.lang.String)
//  .additionalCapabilities(LinuxVirtualMachineAdditionalCapabilities)
//  .adminPassword(java.lang.String)
//  .adminSshKey(IResolvable)
//  .adminSshKey(java.util.List<LinuxVirtualMachineAdminSshKey>)
//  .allowExtensionOperations(java.lang.Boolean)
//  .allowExtensionOperations(IResolvable)
//  .availabilitySetId(java.lang.String)
//  .bootDiagnostics(LinuxVirtualMachineBootDiagnostics)
//  .computerName(java.lang.String)
//  .customData(java.lang.String)
//  .disablePasswordAuthentication(java.lang.Boolean)
//  .disablePasswordAuthentication(IResolvable)
//  .encryptionAtHostEnabled(java.lang.Boolean)
//  .encryptionAtHostEnabled(IResolvable)
//  .evictionPolicy(java.lang.String)
//  .extensionsTimeBudget(java.lang.String)
//  .id(java.lang.String)
//  .licenseType(java.lang.String)
//  .maxBidPrice(java.lang.Number)
//  .plan(LinuxVirtualMachinePlan)
//  .priority(java.lang.String)
//  .provisionVmAgent(java.lang.Boolean)
//  .provisionVmAgent(IResolvable)
//  .secret(IResolvable)
//  .secret(java.util.List<LinuxVirtualMachineSecret>)
//  .sourceImageId(java.lang.String)
//  .sourceImageReference(LinuxVirtualMachineSourceImageReference)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LinuxVirtualMachineTimeouts)
//  .virtualMachineScaleSetId(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#admin_username LinuxVirtualMachine#admin_username}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#location LinuxVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#network_interface_ids LinuxVirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#resource_group_name LinuxVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#size LinuxVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.additionalCapabilities">additionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#admin_password LinuxVirtualMachine#admin_password}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminSshKey">adminSshKey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>></code> | admin_ssh_key block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.allowExtensionOperations">allowExtensionOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#allow_extension_operations LinuxVirtualMachine#allow_extension_operations}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.availabilitySetId">availabilitySetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#availability_set_id LinuxVirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.computerName">computerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#computer_name LinuxVirtualMachine#computer_name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.customData">customData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#custom_data LinuxVirtualMachine#custom_data}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.disablePasswordAuthentication">disablePasswordAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#disable_password_authentication LinuxVirtualMachine#disable_password_authentication}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#encryption_at_host_enabled LinuxVirtualMachine#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#eviction_policy LinuxVirtualMachine#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.extensionsTimeBudget">extensionsTimeBudget</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#extensions_time_budget LinuxVirtualMachine#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#id LinuxVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#license_type LinuxVirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.maxBidPrice">maxBidPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#max_bid_price LinuxVirtualMachine#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.priority">priority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#priority LinuxVirtualMachine#priority}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provisionVmAgent">provisionVmAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#provision_vm_agent LinuxVirtualMachine#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.secret">secret</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>></code> | secret block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.sourceImageId">sourceImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#source_image_id LinuxVirtualMachine#source_image_id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.sourceImageReference">sourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#tags LinuxVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#virtual_machine_scale_set_id LinuxVirtualMachine#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#zone LinuxVirtualMachine#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#admin_username LinuxVirtualMachine#admin_username}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#location LinuxVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}.

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.networkInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#network_interface_ids LinuxVirtualMachine#network_interface_ids}.

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.osDisk"></a>

```java
public LinuxVirtualMachineOsDisk getOsDisk();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#os_disk LinuxVirtualMachine#os_disk}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#resource_group_name LinuxVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#size LinuxVirtualMachine#size}.

---

##### `additionalCapabilities`<sup>Optional</sup> <a name="additionalCapabilities" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.additionalCapabilities"></a>

```java
public LinuxVirtualMachineAdditionalCapabilities getAdditionalCapabilities();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#additional_capabilities LinuxVirtualMachine#additional_capabilities}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#admin_password LinuxVirtualMachine#admin_password}.

---

##### `adminSshKey`<sup>Optional</sup> <a name="adminSshKey" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminSshKey"></a>

```java
public java.lang.Object getAdminSshKey();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>>

admin_ssh_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#admin_ssh_key LinuxVirtualMachine#admin_ssh_key}

---

##### `allowExtensionOperations`<sup>Optional</sup> <a name="allowExtensionOperations" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.allowExtensionOperations"></a>

```java
public java.lang.Object getAllowExtensionOperations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#allow_extension_operations LinuxVirtualMachine#allow_extension_operations}.

---

##### `availabilitySetId`<sup>Optional</sup> <a name="availabilitySetId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.availabilitySetId"></a>

```java
public java.lang.String getAvailabilitySetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#availability_set_id LinuxVirtualMachine#availability_set_id}.

---

##### `bootDiagnostics`<sup>Optional</sup> <a name="bootDiagnostics" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.bootDiagnostics"></a>

```java
public LinuxVirtualMachineBootDiagnostics getBootDiagnostics();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#boot_diagnostics LinuxVirtualMachine#boot_diagnostics}

---

##### `computerName`<sup>Optional</sup> <a name="computerName" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#computer_name LinuxVirtualMachine#computer_name}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#custom_data LinuxVirtualMachine#custom_data}.

---

##### `disablePasswordAuthentication`<sup>Optional</sup> <a name="disablePasswordAuthentication" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.disablePasswordAuthentication"></a>

```java
public java.lang.Object getDisablePasswordAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#disable_password_authentication LinuxVirtualMachine#disable_password_authentication}.

---

##### `encryptionAtHostEnabled`<sup>Optional</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.encryptionAtHostEnabled"></a>

```java
public java.lang.Object getEncryptionAtHostEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#encryption_at_host_enabled LinuxVirtualMachine#encryption_at_host_enabled}.

---

##### `evictionPolicy`<sup>Optional</sup> <a name="evictionPolicy" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.evictionPolicy"></a>

```java
public java.lang.String getEvictionPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#eviction_policy LinuxVirtualMachine#eviction_policy}.

---

##### `extensionsTimeBudget`<sup>Optional</sup> <a name="extensionsTimeBudget" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.extensionsTimeBudget"></a>

```java
public java.lang.String getExtensionsTimeBudget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#extensions_time_budget LinuxVirtualMachine#extensions_time_budget}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#id LinuxVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#license_type LinuxVirtualMachine#license_type}.

---

##### `maxBidPrice`<sup>Optional</sup> <a name="maxBidPrice" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.maxBidPrice"></a>

```java
public java.lang.Number getMaxBidPrice();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#max_bid_price LinuxVirtualMachine#max_bid_price}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.plan"></a>

```java
public LinuxVirtualMachinePlan getPlan();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#plan LinuxVirtualMachine#plan}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#priority LinuxVirtualMachine#priority}.

---

##### `provisionVmAgent`<sup>Optional</sup> <a name="provisionVmAgent" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provisionVmAgent"></a>

```java
public java.lang.Object getProvisionVmAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#provision_vm_agent LinuxVirtualMachine#provision_vm_agent}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.secret"></a>

```java
public java.lang.Object getSecret();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#secret LinuxVirtualMachine#secret}

---

##### `sourceImageId`<sup>Optional</sup> <a name="sourceImageId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.sourceImageId"></a>

```java
public java.lang.String getSourceImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#source_image_id LinuxVirtualMachine#source_image_id}.

---

##### `sourceImageReference`<sup>Optional</sup> <a name="sourceImageReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.sourceImageReference"></a>

```java
public LinuxVirtualMachineSourceImageReference getSourceImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#source_image_reference LinuxVirtualMachine#source_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#tags LinuxVirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.timeouts"></a>

```java
public LinuxVirtualMachineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#timeouts LinuxVirtualMachine#timeouts}

---

##### `virtualMachineScaleSetId`<sup>Optional</sup> <a name="virtualMachineScaleSetId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.virtualMachineScaleSetId"></a>

```java
public java.lang.String getVirtualMachineScaleSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#virtual_machine_scale_set_id LinuxVirtualMachine#virtual_machine_scale_set_id}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#zone LinuxVirtualMachine#zone}.

---

### LinuxVirtualMachineOsDisk <a name="LinuxVirtualMachineOsDisk" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineOsDisk;

LinuxVirtualMachineOsDisk.builder()
    .caching(java.lang.String)
    .storageAccountType(java.lang.String)
//  .diffDiskSettings(LinuxVirtualMachineOsDiskDiffDiskSettings)
//  .diskEncryptionSetId(java.lang.String)
//  .diskSizeGb(java.lang.Number)
//  .name(java.lang.String)
//  .writeAcceleratorEnabled(java.lang.Boolean)
//  .writeAcceleratorEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.caching">caching</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#caching LinuxVirtualMachine#caching}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#storage_account_type LinuxVirtualMachine#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diffDiskSettings">diffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a></code> | diff_disk_settings block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#disk_encryption_set_id LinuxVirtualMachine#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#disk_size_gb LinuxVirtualMachine#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#write_accelerator_enabled LinuxVirtualMachine#write_accelerator_enabled}. |

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.caching"></a>

```java
public java.lang.String getCaching();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#caching LinuxVirtualMachine#caching}.

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#storage_account_type LinuxVirtualMachine#storage_account_type}.

---

##### `diffDiskSettings`<sup>Optional</sup> <a name="diffDiskSettings" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diffDiskSettings"></a>

```java
public LinuxVirtualMachineOsDiskDiffDiskSettings getDiffDiskSettings();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#diff_disk_settings LinuxVirtualMachine#diff_disk_settings}

---

##### `diskEncryptionSetId`<sup>Optional</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diskEncryptionSetId"></a>

```java
public java.lang.String getDiskEncryptionSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#disk_encryption_set_id LinuxVirtualMachine#disk_encryption_set_id}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#disk_size_gb LinuxVirtualMachine#disk_size_gb}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}.

---

##### `writeAcceleratorEnabled`<sup>Optional</sup> <a name="writeAcceleratorEnabled" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.writeAcceleratorEnabled"></a>

```java
public java.lang.Object getWriteAcceleratorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#write_accelerator_enabled LinuxVirtualMachine#write_accelerator_enabled}.

---

### LinuxVirtualMachineOsDiskDiffDiskSettings <a name="LinuxVirtualMachineOsDiskDiffDiskSettings" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineOsDiskDiffDiskSettings;

LinuxVirtualMachineOsDiskDiffDiskSettings.builder()
    .option(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings.property.option">option</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#option LinuxVirtualMachine#option}. |

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings.property.option"></a>

```java
public java.lang.String getOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#option LinuxVirtualMachine#option}.

---

### LinuxVirtualMachinePlan <a name="LinuxVirtualMachinePlan" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachinePlan;

LinuxVirtualMachinePlan.builder()
    .name(java.lang.String)
    .product(java.lang.String)
    .publisher(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan.property.product">product</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#product LinuxVirtualMachine#product}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#publisher LinuxVirtualMachine#publisher}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#product LinuxVirtualMachine#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#publisher LinuxVirtualMachine#publisher}.

---

### LinuxVirtualMachineSecret <a name="LinuxVirtualMachineSecret" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineSecret;

LinuxVirtualMachineSecret.builder()
    .certificate(IResolvable)
    .certificate(java.util.List<LinuxVirtualMachineSecretCertificate>)
    .keyVaultId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret.property.certificate">certificate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a>></code> | certificate block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#key_vault_id LinuxVirtualMachine#key_vault_id}. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a>>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#certificate LinuxVirtualMachine#certificate}

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#key_vault_id LinuxVirtualMachine#key_vault_id}.

---

### LinuxVirtualMachineSecretCertificate <a name="LinuxVirtualMachineSecretCertificate" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineSecretCertificate;

LinuxVirtualMachineSecretCertificate.builder()
    .build();
```


### LinuxVirtualMachineSourceImageReference <a name="LinuxVirtualMachineSourceImageReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineSourceImageReference;

LinuxVirtualMachineSourceImageReference.builder()
    .offer(java.lang.String)
    .publisher(java.lang.String)
    .sku(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.offer">offer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#offer LinuxVirtualMachine#offer}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#publisher LinuxVirtualMachine#publisher}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#sku LinuxVirtualMachine#sku}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#version LinuxVirtualMachine#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#offer LinuxVirtualMachine#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#publisher LinuxVirtualMachine#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#sku LinuxVirtualMachine#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#version LinuxVirtualMachine#version}.

---

### LinuxVirtualMachineTimeouts <a name="LinuxVirtualMachineTimeouts" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineTimeouts;

LinuxVirtualMachineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#create LinuxVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#delete LinuxVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#read LinuxVirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#update LinuxVirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#create LinuxVirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#delete LinuxVirtualMachine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#read LinuxVirtualMachine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine#update LinuxVirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LinuxVirtualMachineAdditionalCapabilitiesOutputReference <a name="LinuxVirtualMachineAdditionalCapabilitiesOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference;

new LinuxVirtualMachineAdditionalCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled">resetUltraSsdEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUltraSsdEnabled` <a name="resetUltraSsdEnabled" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled"></a>

```java
public void resetUltraSsdEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput">ultraSsdEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled">ultraSsdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ultraSsdEnabledInput`<sup>Optional</sup> <a name="ultraSsdEnabledInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput"></a>

```java
public java.lang.Object getUltraSsdEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ultraSsdEnabled`<sup>Required</sup> <a name="ultraSsdEnabled" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled"></a>

```java
public java.lang.Object getUltraSsdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue"></a>

```java
public LinuxVirtualMachineAdditionalCapabilities getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a>

---


### LinuxVirtualMachineAdminSshKeyList <a name="LinuxVirtualMachineAdminSshKeyList" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineAdminSshKeyList;

new LinuxVirtualMachineAdminSshKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.get"></a>

```java
public LinuxVirtualMachineAdminSshKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>>

---


### LinuxVirtualMachineAdminSshKeyOutputReference <a name="LinuxVirtualMachineAdminSshKeyOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineAdminSshKeyOutputReference;

new LinuxVirtualMachineAdminSshKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.publicKeyInput"></a>

```java
public java.lang.String getPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a> OR com.hashicorp.cdktf.IResolvable

---


### LinuxVirtualMachineBootDiagnosticsOutputReference <a name="LinuxVirtualMachineBootDiagnosticsOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineBootDiagnosticsOutputReference;

new LinuxVirtualMachineBootDiagnosticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput">storageAccountUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri">storageAccountUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageAccountUriInput`<sup>Optional</sup> <a name="storageAccountUriInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput"></a>

```java
public java.lang.String getStorageAccountUriInput();
```

- *Type:* java.lang.String

---

##### `storageAccountUri`<sup>Required</sup> <a name="storageAccountUri" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri"></a>

```java
public java.lang.String getStorageAccountUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.internalValue"></a>

```java
public LinuxVirtualMachineBootDiagnostics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a>

---


### LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference <a name="LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference;

new LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput">optionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option">option</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `optionInput`<sup>Optional</sup> <a name="optionInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput"></a>

```java
public java.lang.String getOptionInput();
```

- *Type:* java.lang.String

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option"></a>

```java
public java.lang.String getOption();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue"></a>

```java
public LinuxVirtualMachineOsDiskDiffDiskSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a>

---


### LinuxVirtualMachineOsDiskOutputReference <a name="LinuxVirtualMachineOsDiskOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineOsDiskOutputReference;

new LinuxVirtualMachineOsDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.putDiffDiskSettings">putDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiffDiskSettings">resetDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId">resetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled">resetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiffDiskSettings` <a name="putDiffDiskSettings" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.putDiffDiskSettings"></a>

```java
public void putDiffDiskSettings(LinuxVirtualMachineOsDiskDiffDiskSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.putDiffDiskSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a>

---

##### `resetDiffDiskSettings` <a name="resetDiffDiskSettings" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiffDiskSettings"></a>

```java
public void resetDiffDiskSettings()
```

##### `resetDiskEncryptionSetId` <a name="resetDiskEncryptionSetId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId"></a>

```java
public void resetDiskEncryptionSetId()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetWriteAcceleratorEnabled` <a name="resetWriteAcceleratorEnabled" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```java
public void resetWriteAcceleratorEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diffDiskSettings">diffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference">LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.cachingInput">cachingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput">diffDiskSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput">diskEncryptionSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput">writeAcceleratorEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.caching">caching</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diffDiskSettings`<sup>Required</sup> <a name="diffDiskSettings" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diffDiskSettings"></a>

```java
public LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference getDiffDiskSettings();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference">LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference</a>

---

##### `cachingInput`<sup>Optional</sup> <a name="cachingInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.cachingInput"></a>

```java
public java.lang.String getCachingInput();
```

- *Type:* java.lang.String

---

##### `diffDiskSettingsInput`<sup>Optional</sup> <a name="diffDiskSettingsInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput"></a>

```java
public LinuxVirtualMachineOsDiskDiffDiskSettings getDiffDiskSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a>

---

##### `diskEncryptionSetIdInput`<sup>Optional</sup> <a name="diskEncryptionSetIdInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```java
public java.lang.String getDiskEncryptionSetIdInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput"></a>

```java
public java.lang.String getStorageAccountTypeInput();
```

- *Type:* java.lang.String

---

##### `writeAcceleratorEnabledInput`<sup>Optional</sup> <a name="writeAcceleratorEnabledInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```java
public java.lang.Object getWriteAcceleratorEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.caching"></a>

```java
public java.lang.String getCaching();
```

- *Type:* java.lang.String

---

##### `diskEncryptionSetId`<sup>Required</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId"></a>

```java
public java.lang.String getDiskEncryptionSetId();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

---

##### `writeAcceleratorEnabled`<sup>Required</sup> <a name="writeAcceleratorEnabled" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```java
public java.lang.Object getWriteAcceleratorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.internalValue"></a>

```java
public LinuxVirtualMachineOsDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a>

---


### LinuxVirtualMachinePlanOutputReference <a name="LinuxVirtualMachinePlanOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachinePlanOutputReference;

new LinuxVirtualMachinePlanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.productInput">productInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.product">product</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.productInput"></a>

```java
public java.lang.String getProductInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.internalValue"></a>

```java
public LinuxVirtualMachinePlan getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a>

---


### LinuxVirtualMachineSecretCertificateList <a name="LinuxVirtualMachineSecretCertificateList" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineSecretCertificateList;

new LinuxVirtualMachineSecretCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.get"></a>

```java
public LinuxVirtualMachineSecretCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a>>

---


### LinuxVirtualMachineSecretCertificateOutputReference <a name="LinuxVirtualMachineSecretCertificateOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineSecretCertificateOutputReference;

new LinuxVirtualMachineSecretCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a> OR com.hashicorp.cdktf.IResolvable

---


### LinuxVirtualMachineSecretList <a name="LinuxVirtualMachineSecretList" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineSecretList;

new LinuxVirtualMachineSecretList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.get"></a>

```java
public LinuxVirtualMachineSecretOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>>

---


### LinuxVirtualMachineSecretOutputReference <a name="LinuxVirtualMachineSecretOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineSecretOutputReference;

new LinuxVirtualMachineSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.putCertificate">putCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.putCertificate"></a>

```java
public void putCertificate(IResolvable OR java.util.List<LinuxVirtualMachineSecretCertificate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.putCertificate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList">LinuxVirtualMachineSecretCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.certificateInput">certificateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.certificate"></a>

```java
public LinuxVirtualMachineSecretCertificateList getCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList">LinuxVirtualMachineSecretCertificateList</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.certificateInput"></a>

```java
public java.lang.Object getCertificateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a>>

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a> OR com.hashicorp.cdktf.IResolvable

---


### LinuxVirtualMachineSourceImageReferenceOutputReference <a name="LinuxVirtualMachineSourceImageReferenceOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineSourceImageReferenceOutputReference;

new LinuxVirtualMachineSourceImageReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.offerInput">offerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.offer">offer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.offerInput"></a>

```java
public java.lang.String getOfferInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.internalValue"></a>

```java
public LinuxVirtualMachineSourceImageReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a>

---


### LinuxVirtualMachineTimeoutsOutputReference <a name="LinuxVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.linux_virtual_machine.LinuxVirtualMachineTimeoutsOutputReference;

new LinuxVirtualMachineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



