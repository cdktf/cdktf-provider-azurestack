# `azurestack_virtual_machine`

Refer to the Terraform Registory for docs: [`azurestack_virtual_machine`](https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine).

# `virtualMachine` Submodule <a name="`virtualMachine` Submodule" id="@cdktf/provider-azurestack.virtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachine <a name="VirtualMachine" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine azurestack_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachine;

VirtualMachine.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .networkInterfaceIds(java.util.List<java.lang.String>)
    .resourceGroupName(java.lang.String)
    .storageOsDisk(VirtualMachineStorageOsDisk)
    .vmSize(java.lang.String)
//  .availabilitySetId(java.lang.String)
//  .bootDiagnostics(VirtualMachineBootDiagnostics)
//  .deleteDataDisksOnTermination(java.lang.Boolean)
//  .deleteDataDisksOnTermination(IResolvable)
//  .deleteOsDiskOnTermination(java.lang.Boolean)
//  .deleteOsDiskOnTermination(IResolvable)
//  .id(java.lang.String)
//  .identity(VirtualMachineIdentity)
//  .licenseType(java.lang.String)
//  .osProfile(VirtualMachineOsProfile)
//  .osProfileLinuxConfig(VirtualMachineOsProfileLinuxConfig)
//  .osProfileSecrets(IResolvable)
//  .osProfileSecrets(java.util.List<VirtualMachineOsProfileSecrets>)
//  .osProfileWindowsConfig(VirtualMachineOsProfileWindowsConfig)
//  .plan(VirtualMachinePlan)
//  .primaryNetworkInterfaceId(java.lang.String)
//  .storageDataDisk(IResolvable)
//  .storageDataDisk(java.util.List<VirtualMachineStorageDataDisk>)
//  .storageImageReference(VirtualMachineStorageImageReference)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualMachineTimeouts)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#location VirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#network_interface_ids VirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#resource_group_name VirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.storageOsDisk">storageOsDisk</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a></code> | storage_os_disk block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vm_size VirtualMachine#vm_size}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.availabilitySetId">availabilitySetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#availability_set_id VirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.deleteDataDisksOnTermination">deleteDataDisksOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete_data_disks_on_termination VirtualMachine#delete_data_disks_on_termination}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.deleteOsDiskOnTermination">deleteOsDiskOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete_os_disk_on_termination VirtualMachine#delete_os_disk_on_termination}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#id VirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#license_type VirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.osProfile">osProfile</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a></code> | os_profile block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.osProfileLinuxConfig">osProfileLinuxConfig</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a></code> | os_profile_linux_config block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.osProfileSecrets">osProfileSecrets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>></code> | os_profile_secrets block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.osProfileWindowsConfig">osProfileWindowsConfig</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a></code> | os_profile_windows_config block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.primaryNetworkInterfaceId">primaryNetworkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#primary_network_interface_id VirtualMachine#primary_network_interface_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.storageDataDisk">storageDataDisk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>></code> | storage_data_disk block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.storageImageReference">storageImageReference</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a></code> | storage_image_reference block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#tags VirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#zones VirtualMachine#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#location VirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.networkInterfaceIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#network_interface_ids VirtualMachine#network_interface_ids}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#resource_group_name VirtualMachine#resource_group_name}.

---

##### `storageOsDisk`<sup>Required</sup> <a name="storageOsDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.storageOsDisk"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a>

storage_os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#storage_os_disk VirtualMachine#storage_os_disk}

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.vmSize"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vm_size VirtualMachine#vm_size}.

---

##### `availabilitySetId`<sup>Optional</sup> <a name="availabilitySetId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.availabilitySetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#availability_set_id VirtualMachine#availability_set_id}.

---

##### `bootDiagnostics`<sup>Optional</sup> <a name="bootDiagnostics" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.bootDiagnostics"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#boot_diagnostics VirtualMachine#boot_diagnostics}

---

##### `deleteDataDisksOnTermination`<sup>Optional</sup> <a name="deleteDataDisksOnTermination" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.deleteDataDisksOnTermination"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete_data_disks_on_termination VirtualMachine#delete_data_disks_on_termination}.

---

##### `deleteOsDiskOnTermination`<sup>Optional</sup> <a name="deleteOsDiskOnTermination" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.deleteOsDiskOnTermination"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete_os_disk_on_termination VirtualMachine#delete_os_disk_on_termination}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#identity VirtualMachine#identity}

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.licenseType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#license_type VirtualMachine#license_type}.

---

##### `osProfile`<sup>Optional</sup> <a name="osProfile" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.osProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a>

os_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_profile VirtualMachine#os_profile}

---

##### `osProfileLinuxConfig`<sup>Optional</sup> <a name="osProfileLinuxConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.osProfileLinuxConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a>

os_profile_linux_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_profile_linux_config VirtualMachine#os_profile_linux_config}

---

##### `osProfileSecrets`<sup>Optional</sup> <a name="osProfileSecrets" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.osProfileSecrets"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>>

os_profile_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_profile_secrets VirtualMachine#os_profile_secrets}

---

##### `osProfileWindowsConfig`<sup>Optional</sup> <a name="osProfileWindowsConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.osProfileWindowsConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a>

os_profile_windows_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_profile_windows_config VirtualMachine#os_profile_windows_config}

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.plan"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#plan VirtualMachine#plan}

---

##### `primaryNetworkInterfaceId`<sup>Optional</sup> <a name="primaryNetworkInterfaceId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.primaryNetworkInterfaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#primary_network_interface_id VirtualMachine#primary_network_interface_id}.

---

##### `storageDataDisk`<sup>Optional</sup> <a name="storageDataDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.storageDataDisk"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>>

storage_data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#storage_data_disk VirtualMachine#storage_data_disk}

---

##### `storageImageReference`<sup>Optional</sup> <a name="storageImageReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.storageImageReference"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a>

storage_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#storage_image_reference VirtualMachine#storage_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#tags VirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#timeouts VirtualMachine#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.zones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#zones VirtualMachine#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putBootDiagnostics">putBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfile">putOsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileLinuxConfig">putOsProfileLinuxConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileSecrets">putOsProfileSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileWindowsConfig">putOsProfileWindowsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putPlan">putPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageDataDisk">putStorageDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageImageReference">putStorageImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageOsDisk">putStorageOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetAvailabilitySetId">resetAvailabilitySetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetBootDiagnostics">resetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetDeleteDataDisksOnTermination">resetDeleteDataDisksOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetDeleteOsDiskOnTermination">resetDeleteOsDiskOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfile">resetOsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfileLinuxConfig">resetOsProfileLinuxConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfileSecrets">resetOsProfileSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfileWindowsConfig">resetOsProfileWindowsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetPlan">resetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetPrimaryNetworkInterfaceId">resetPrimaryNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetStorageDataDisk">resetStorageDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetStorageImageReference">resetStorageImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBootDiagnostics` <a name="putBootDiagnostics" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putBootDiagnostics"></a>

```java
public void putBootDiagnostics(VirtualMachineBootDiagnostics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putBootDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putIdentity"></a>

```java
public void putIdentity(VirtualMachineIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a>

---

##### `putOsProfile` <a name="putOsProfile" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfile"></a>

```java
public void putOsProfile(VirtualMachineOsProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a>

---

##### `putOsProfileLinuxConfig` <a name="putOsProfileLinuxConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileLinuxConfig"></a>

```java
public void putOsProfileLinuxConfig(VirtualMachineOsProfileLinuxConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileLinuxConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a>

---

##### `putOsProfileSecrets` <a name="putOsProfileSecrets" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileSecrets"></a>

```java
public void putOsProfileSecrets(IResolvable OR java.util.List<VirtualMachineOsProfileSecrets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileSecrets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>>

---

##### `putOsProfileWindowsConfig` <a name="putOsProfileWindowsConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileWindowsConfig"></a>

```java
public void putOsProfileWindowsConfig(VirtualMachineOsProfileWindowsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileWindowsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a>

---

##### `putPlan` <a name="putPlan" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putPlan"></a>

```java
public void putPlan(VirtualMachinePlan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a>

---

##### `putStorageDataDisk` <a name="putStorageDataDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageDataDisk"></a>

```java
public void putStorageDataDisk(IResolvable OR java.util.List<VirtualMachineStorageDataDisk> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageDataDisk.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>>

---

##### `putStorageImageReference` <a name="putStorageImageReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageImageReference"></a>

```java
public void putStorageImageReference(VirtualMachineStorageImageReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a>

---

##### `putStorageOsDisk` <a name="putStorageOsDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageOsDisk"></a>

```java
public void putStorageOsDisk(VirtualMachineStorageOsDisk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putTimeouts"></a>

```java
public void putTimeouts(VirtualMachineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a>

---

##### `resetAvailabilitySetId` <a name="resetAvailabilitySetId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetAvailabilitySetId"></a>

```java
public void resetAvailabilitySetId()
```

##### `resetBootDiagnostics` <a name="resetBootDiagnostics" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetBootDiagnostics"></a>

```java
public void resetBootDiagnostics()
```

##### `resetDeleteDataDisksOnTermination` <a name="resetDeleteDataDisksOnTermination" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetDeleteDataDisksOnTermination"></a>

```java
public void resetDeleteDataDisksOnTermination()
```

##### `resetDeleteOsDiskOnTermination` <a name="resetDeleteOsDiskOnTermination" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetDeleteOsDiskOnTermination"></a>

```java
public void resetDeleteOsDiskOnTermination()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetLicenseType"></a>

```java
public void resetLicenseType()
```

##### `resetOsProfile` <a name="resetOsProfile" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfile"></a>

```java
public void resetOsProfile()
```

##### `resetOsProfileLinuxConfig` <a name="resetOsProfileLinuxConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfileLinuxConfig"></a>

```java
public void resetOsProfileLinuxConfig()
```

##### `resetOsProfileSecrets` <a name="resetOsProfileSecrets" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfileSecrets"></a>

```java
public void resetOsProfileSecrets()
```

##### `resetOsProfileWindowsConfig` <a name="resetOsProfileWindowsConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfileWindowsConfig"></a>

```java
public void resetOsProfileWindowsConfig()
```

##### `resetPlan` <a name="resetPlan" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetPlan"></a>

```java
public void resetPlan()
```

##### `resetPrimaryNetworkInterfaceId` <a name="resetPrimaryNetworkInterfaceId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetPrimaryNetworkInterfaceId"></a>

```java
public void resetPrimaryNetworkInterfaceId()
```

##### `resetStorageDataDisk` <a name="resetStorageDataDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetStorageDataDisk"></a>

```java
public void resetStorageDataDisk()
```

##### `resetStorageImageReference` <a name="resetStorageImageReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetStorageImageReference"></a>

```java
public void resetStorageImageReference()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetZones"></a>

```java
public void resetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachine;

VirtualMachine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachine;

VirtualMachine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachine;

VirtualMachine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference">VirtualMachineBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference">VirtualMachineIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfile">osProfile</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference">VirtualMachineOsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileLinuxConfig">osProfileLinuxConfig</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference">VirtualMachineOsProfileLinuxConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileSecrets">osProfileSecrets</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList">VirtualMachineOsProfileSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileWindowsConfig">osProfileWindowsConfig</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference">VirtualMachineOsProfileWindowsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference">VirtualMachinePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageDataDisk">storageDataDisk</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList">VirtualMachineStorageDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageImageReference">storageImageReference</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference">VirtualMachineStorageImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageOsDisk">storageOsDisk</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference">VirtualMachineStorageOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference">VirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.availabilitySetIdInput">availabilitySetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.bootDiagnosticsInput">bootDiagnosticsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteDataDisksOnTerminationInput">deleteDataDisksOnTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteOsDiskOnTerminationInput">deleteOsDiskOnTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.licenseTypeInput">licenseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.networkInterfaceIdsInput">networkInterfaceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileInput">osProfileInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileLinuxConfigInput">osProfileLinuxConfigInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileSecretsInput">osProfileSecretsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileWindowsConfigInput">osProfileWindowsConfigInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.planInput">planInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.primaryNetworkInterfaceIdInput">primaryNetworkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageDataDiskInput">storageDataDiskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageImageReferenceInput">storageImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageOsDiskInput">storageOsDiskInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.availabilitySetId">availabilitySetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteDataDisksOnTermination">deleteDataDisksOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteOsDiskOnTermination">deleteOsDiskOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.primaryNetworkInterfaceId">primaryNetworkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bootDiagnostics`<sup>Required</sup> <a name="bootDiagnostics" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.bootDiagnostics"></a>

```java
public VirtualMachineBootDiagnosticsOutputReference getBootDiagnostics();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference">VirtualMachineBootDiagnosticsOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.identity"></a>

```java
public VirtualMachineIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference">VirtualMachineIdentityOutputReference</a>

---

##### `osProfile`<sup>Required</sup> <a name="osProfile" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfile"></a>

```java
public VirtualMachineOsProfileOutputReference getOsProfile();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference">VirtualMachineOsProfileOutputReference</a>

---

##### `osProfileLinuxConfig`<sup>Required</sup> <a name="osProfileLinuxConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileLinuxConfig"></a>

```java
public VirtualMachineOsProfileLinuxConfigOutputReference getOsProfileLinuxConfig();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference">VirtualMachineOsProfileLinuxConfigOutputReference</a>

---

##### `osProfileSecrets`<sup>Required</sup> <a name="osProfileSecrets" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileSecrets"></a>

```java
public VirtualMachineOsProfileSecretsList getOsProfileSecrets();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList">VirtualMachineOsProfileSecretsList</a>

---

##### `osProfileWindowsConfig`<sup>Required</sup> <a name="osProfileWindowsConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileWindowsConfig"></a>

```java
public VirtualMachineOsProfileWindowsConfigOutputReference getOsProfileWindowsConfig();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference">VirtualMachineOsProfileWindowsConfigOutputReference</a>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.plan"></a>

```java
public VirtualMachinePlanOutputReference getPlan();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference">VirtualMachinePlanOutputReference</a>

---

##### `storageDataDisk`<sup>Required</sup> <a name="storageDataDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageDataDisk"></a>

```java
public VirtualMachineStorageDataDiskList getStorageDataDisk();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList">VirtualMachineStorageDataDiskList</a>

---

##### `storageImageReference`<sup>Required</sup> <a name="storageImageReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageImageReference"></a>

```java
public VirtualMachineStorageImageReferenceOutputReference getStorageImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference">VirtualMachineStorageImageReferenceOutputReference</a>

---

##### `storageOsDisk`<sup>Required</sup> <a name="storageOsDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageOsDisk"></a>

```java
public VirtualMachineStorageOsDiskOutputReference getStorageOsDisk();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference">VirtualMachineStorageOsDiskOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.timeouts"></a>

```java
public VirtualMachineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference">VirtualMachineTimeoutsOutputReference</a>

---

##### `availabilitySetIdInput`<sup>Optional</sup> <a name="availabilitySetIdInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.availabilitySetIdInput"></a>

```java
public java.lang.String getAvailabilitySetIdInput();
```

- *Type:* java.lang.String

---

##### `bootDiagnosticsInput`<sup>Optional</sup> <a name="bootDiagnosticsInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.bootDiagnosticsInput"></a>

```java
public VirtualMachineBootDiagnostics getBootDiagnosticsInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a>

---

##### `deleteDataDisksOnTerminationInput`<sup>Optional</sup> <a name="deleteDataDisksOnTerminationInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteDataDisksOnTerminationInput"></a>

```java
public java.lang.Object getDeleteDataDisksOnTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deleteOsDiskOnTerminationInput`<sup>Optional</sup> <a name="deleteOsDiskOnTerminationInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteOsDiskOnTerminationInput"></a>

```java
public java.lang.Object getDeleteOsDiskOnTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.identityInput"></a>

```java
public VirtualMachineIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.licenseTypeInput"></a>

```java
public java.lang.String getLicenseTypeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdsInput`<sup>Optional</sup> <a name="networkInterfaceIdsInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.networkInterfaceIdsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `osProfileInput`<sup>Optional</sup> <a name="osProfileInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileInput"></a>

```java
public VirtualMachineOsProfile getOsProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a>

---

##### `osProfileLinuxConfigInput`<sup>Optional</sup> <a name="osProfileLinuxConfigInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileLinuxConfigInput"></a>

```java
public VirtualMachineOsProfileLinuxConfig getOsProfileLinuxConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a>

---

##### `osProfileSecretsInput`<sup>Optional</sup> <a name="osProfileSecretsInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileSecretsInput"></a>

```java
public java.lang.Object getOsProfileSecretsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>>

---

##### `osProfileWindowsConfigInput`<sup>Optional</sup> <a name="osProfileWindowsConfigInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileWindowsConfigInput"></a>

```java
public VirtualMachineOsProfileWindowsConfig getOsProfileWindowsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a>

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.planInput"></a>

```java
public VirtualMachinePlan getPlanInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a>

---

##### `primaryNetworkInterfaceIdInput`<sup>Optional</sup> <a name="primaryNetworkInterfaceIdInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.primaryNetworkInterfaceIdInput"></a>

```java
public java.lang.String getPrimaryNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `storageDataDiskInput`<sup>Optional</sup> <a name="storageDataDiskInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageDataDiskInput"></a>

```java
public java.lang.Object getStorageDataDiskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>>

---

##### `storageImageReferenceInput`<sup>Optional</sup> <a name="storageImageReferenceInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageImageReferenceInput"></a>

```java
public VirtualMachineStorageImageReference getStorageImageReferenceInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a>

---

##### `storageOsDiskInput`<sup>Optional</sup> <a name="storageOsDiskInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageOsDiskInput"></a>

```java
public VirtualMachineStorageOsDisk getStorageOsDiskInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a>

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availabilitySetId`<sup>Required</sup> <a name="availabilitySetId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.availabilitySetId"></a>

```java
public java.lang.String getAvailabilitySetId();
```

- *Type:* java.lang.String

---

##### `deleteDataDisksOnTermination`<sup>Required</sup> <a name="deleteDataDisksOnTermination" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteDataDisksOnTermination"></a>

```java
public java.lang.Object getDeleteDataDisksOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deleteOsDiskOnTermination`<sup>Required</sup> <a name="deleteOsDiskOnTermination" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteOsDiskOnTermination"></a>

```java
public java.lang.Object getDeleteOsDiskOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.networkInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `primaryNetworkInterfaceId`<sup>Required</sup> <a name="primaryNetworkInterfaceId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.primaryNetworkInterfaceId"></a>

```java
public java.lang.String getPrimaryNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineBootDiagnostics <a name="VirtualMachineBootDiagnostics" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineBootDiagnostics;

VirtualMachineBootDiagnostics.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .storageUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#enabled VirtualMachine#enabled}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics.property.storageUri">storageUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#storage_uri VirtualMachine#storage_uri}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#enabled VirtualMachine#enabled}.

---

##### `storageUri`<sup>Required</sup> <a name="storageUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics.property.storageUri"></a>

```java
public java.lang.String getStorageUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#storage_uri VirtualMachine#storage_uri}.

---

### VirtualMachineConfig <a name="VirtualMachineConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineConfig;

VirtualMachineConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .networkInterfaceIds(java.util.List<java.lang.String>)
    .resourceGroupName(java.lang.String)
    .storageOsDisk(VirtualMachineStorageOsDisk)
    .vmSize(java.lang.String)
//  .availabilitySetId(java.lang.String)
//  .bootDiagnostics(VirtualMachineBootDiagnostics)
//  .deleteDataDisksOnTermination(java.lang.Boolean)
//  .deleteDataDisksOnTermination(IResolvable)
//  .deleteOsDiskOnTermination(java.lang.Boolean)
//  .deleteOsDiskOnTermination(IResolvable)
//  .id(java.lang.String)
//  .identity(VirtualMachineIdentity)
//  .licenseType(java.lang.String)
//  .osProfile(VirtualMachineOsProfile)
//  .osProfileLinuxConfig(VirtualMachineOsProfileLinuxConfig)
//  .osProfileSecrets(IResolvable)
//  .osProfileSecrets(java.util.List<VirtualMachineOsProfileSecrets>)
//  .osProfileWindowsConfig(VirtualMachineOsProfileWindowsConfig)
//  .plan(VirtualMachinePlan)
//  .primaryNetworkInterfaceId(java.lang.String)
//  .storageDataDisk(IResolvable)
//  .storageDataDisk(java.util.List<VirtualMachineStorageDataDisk>)
//  .storageImageReference(VirtualMachineStorageImageReference)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualMachineTimeouts)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#location VirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#network_interface_ids VirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#resource_group_name VirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.storageOsDisk">storageOsDisk</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a></code> | storage_os_disk block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vm_size VirtualMachine#vm_size}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.availabilitySetId">availabilitySetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#availability_set_id VirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.deleteDataDisksOnTermination">deleteDataDisksOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete_data_disks_on_termination VirtualMachine#delete_data_disks_on_termination}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.deleteOsDiskOnTermination">deleteOsDiskOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete_os_disk_on_termination VirtualMachine#delete_os_disk_on_termination}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#id VirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#license_type VirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfile">osProfile</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a></code> | os_profile block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfileLinuxConfig">osProfileLinuxConfig</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a></code> | os_profile_linux_config block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfileSecrets">osProfileSecrets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>></code> | os_profile_secrets block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfileWindowsConfig">osProfileWindowsConfig</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a></code> | os_profile_windows_config block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.primaryNetworkInterfaceId">primaryNetworkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#primary_network_interface_id VirtualMachine#primary_network_interface_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.storageDataDisk">storageDataDisk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>></code> | storage_data_disk block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.storageImageReference">storageImageReference</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a></code> | storage_image_reference block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#tags VirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#zones VirtualMachine#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#location VirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.networkInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#network_interface_ids VirtualMachine#network_interface_ids}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#resource_group_name VirtualMachine#resource_group_name}.

---

##### `storageOsDisk`<sup>Required</sup> <a name="storageOsDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.storageOsDisk"></a>

```java
public VirtualMachineStorageOsDisk getStorageOsDisk();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a>

storage_os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#storage_os_disk VirtualMachine#storage_os_disk}

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vm_size VirtualMachine#vm_size}.

---

##### `availabilitySetId`<sup>Optional</sup> <a name="availabilitySetId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.availabilitySetId"></a>

```java
public java.lang.String getAvailabilitySetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#availability_set_id VirtualMachine#availability_set_id}.

---

##### `bootDiagnostics`<sup>Optional</sup> <a name="bootDiagnostics" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.bootDiagnostics"></a>

```java
public VirtualMachineBootDiagnostics getBootDiagnostics();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#boot_diagnostics VirtualMachine#boot_diagnostics}

---

##### `deleteDataDisksOnTermination`<sup>Optional</sup> <a name="deleteDataDisksOnTermination" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.deleteDataDisksOnTermination"></a>

```java
public java.lang.Object getDeleteDataDisksOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete_data_disks_on_termination VirtualMachine#delete_data_disks_on_termination}.

---

##### `deleteOsDiskOnTermination`<sup>Optional</sup> <a name="deleteOsDiskOnTermination" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.deleteOsDiskOnTermination"></a>

```java
public java.lang.Object getDeleteOsDiskOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete_os_disk_on_termination VirtualMachine#delete_os_disk_on_termination}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.identity"></a>

```java
public VirtualMachineIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#identity VirtualMachine#identity}

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#license_type VirtualMachine#license_type}.

---

##### `osProfile`<sup>Optional</sup> <a name="osProfile" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfile"></a>

```java
public VirtualMachineOsProfile getOsProfile();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a>

os_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_profile VirtualMachine#os_profile}

---

##### `osProfileLinuxConfig`<sup>Optional</sup> <a name="osProfileLinuxConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfileLinuxConfig"></a>

```java
public VirtualMachineOsProfileLinuxConfig getOsProfileLinuxConfig();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a>

os_profile_linux_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_profile_linux_config VirtualMachine#os_profile_linux_config}

---

##### `osProfileSecrets`<sup>Optional</sup> <a name="osProfileSecrets" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfileSecrets"></a>

```java
public java.lang.Object getOsProfileSecrets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>>

os_profile_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_profile_secrets VirtualMachine#os_profile_secrets}

---

##### `osProfileWindowsConfig`<sup>Optional</sup> <a name="osProfileWindowsConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfileWindowsConfig"></a>

```java
public VirtualMachineOsProfileWindowsConfig getOsProfileWindowsConfig();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a>

os_profile_windows_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_profile_windows_config VirtualMachine#os_profile_windows_config}

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.plan"></a>

```java
public VirtualMachinePlan getPlan();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#plan VirtualMachine#plan}

---

##### `primaryNetworkInterfaceId`<sup>Optional</sup> <a name="primaryNetworkInterfaceId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.primaryNetworkInterfaceId"></a>

```java
public java.lang.String getPrimaryNetworkInterfaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#primary_network_interface_id VirtualMachine#primary_network_interface_id}.

---

##### `storageDataDisk`<sup>Optional</sup> <a name="storageDataDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.storageDataDisk"></a>

```java
public java.lang.Object getStorageDataDisk();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>>

storage_data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#storage_data_disk VirtualMachine#storage_data_disk}

---

##### `storageImageReference`<sup>Optional</sup> <a name="storageImageReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.storageImageReference"></a>

```java
public VirtualMachineStorageImageReference getStorageImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a>

storage_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#storage_image_reference VirtualMachine#storage_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#tags VirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.timeouts"></a>

```java
public VirtualMachineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#timeouts VirtualMachine#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#zones VirtualMachine#zones}.

---

### VirtualMachineIdentity <a name="VirtualMachineIdentity" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineIdentity;

VirtualMachineIdentity.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#type VirtualMachine#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#type VirtualMachine#type}.

---

### VirtualMachineOsProfile <a name="VirtualMachineOsProfile" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfile;

VirtualMachineOsProfile.builder()
    .adminUsername(java.lang.String)
    .computerName(java.lang.String)
//  .adminPassword(java.lang.String)
//  .customData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#admin_username VirtualMachine#admin_username}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.computerName">computerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#computer_name VirtualMachine#computer_name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#admin_password VirtualMachine#admin_password}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.customData">customData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#custom_data VirtualMachine#custom_data}. |

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#admin_username VirtualMachine#admin_username}.

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#computer_name VirtualMachine#computer_name}.

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#admin_password VirtualMachine#admin_password}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#custom_data VirtualMachine#custom_data}.

---

### VirtualMachineOsProfileLinuxConfig <a name="VirtualMachineOsProfileLinuxConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileLinuxConfig;

VirtualMachineOsProfileLinuxConfig.builder()
    .disablePasswordAuthentication(java.lang.Boolean)
    .disablePasswordAuthentication(IResolvable)
//  .sshKeys(IResolvable)
//  .sshKeys(java.util.List<VirtualMachineOsProfileLinuxConfigSshKeys>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig.property.disablePasswordAuthentication">disablePasswordAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#disable_password_authentication VirtualMachine#disable_password_authentication}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig.property.sshKeys">sshKeys</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>></code> | ssh_keys block. |

---

##### `disablePasswordAuthentication`<sup>Required</sup> <a name="disablePasswordAuthentication" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig.property.disablePasswordAuthentication"></a>

```java
public java.lang.Object getDisablePasswordAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#disable_password_authentication VirtualMachine#disable_password_authentication}.

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig.property.sshKeys"></a>

```java
public java.lang.Object getSshKeys();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>>

ssh_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#ssh_keys VirtualMachine#ssh_keys}

---

### VirtualMachineOsProfileLinuxConfigSshKeys <a name="VirtualMachineOsProfileLinuxConfigSshKeys" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileLinuxConfigSshKeys;

VirtualMachineOsProfileLinuxConfigSshKeys.builder()
    .keyData(java.lang.String)
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys.property.keyData">keyData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#key_data VirtualMachine#key_data}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#path VirtualMachine#path}. |

---

##### `keyData`<sup>Required</sup> <a name="keyData" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys.property.keyData"></a>

```java
public java.lang.String getKeyData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#key_data VirtualMachine#key_data}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#path VirtualMachine#path}.

---

### VirtualMachineOsProfileSecrets <a name="VirtualMachineOsProfileSecrets" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileSecrets;

VirtualMachineOsProfileSecrets.builder()
    .sourceVaultId(java.lang.String)
//  .vaultCertificates(IResolvable)
//  .vaultCertificates(java.util.List<VirtualMachineOsProfileSecretsVaultCertificates>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets.property.sourceVaultId">sourceVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#source_vault_id VirtualMachine#source_vault_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets.property.vaultCertificates">vaultCertificates</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>></code> | vault_certificates block. |

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets.property.sourceVaultId"></a>

```java
public java.lang.String getSourceVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#source_vault_id VirtualMachine#source_vault_id}.

---

##### `vaultCertificates`<sup>Optional</sup> <a name="vaultCertificates" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets.property.vaultCertificates"></a>

```java
public java.lang.Object getVaultCertificates();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>>

vault_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vault_certificates VirtualMachine#vault_certificates}

---

### VirtualMachineOsProfileSecretsVaultCertificates <a name="VirtualMachineOsProfileSecretsVaultCertificates" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileSecretsVaultCertificates;

VirtualMachineOsProfileSecretsVaultCertificates.builder()
    .certificateUrl(java.lang.String)
//  .certificateStore(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates.property.certificateUrl">certificateUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#certificate_url VirtualMachine#certificate_url}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates.property.certificateStore">certificateStore</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#certificate_store VirtualMachine#certificate_store}. |

---

##### `certificateUrl`<sup>Required</sup> <a name="certificateUrl" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates.property.certificateUrl"></a>

```java
public java.lang.String getCertificateUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#certificate_url VirtualMachine#certificate_url}.

---

##### `certificateStore`<sup>Optional</sup> <a name="certificateStore" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates.property.certificateStore"></a>

```java
public java.lang.String getCertificateStore();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#certificate_store VirtualMachine#certificate_store}.

---

### VirtualMachineOsProfileWindowsConfig <a name="VirtualMachineOsProfileWindowsConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileWindowsConfig;

VirtualMachineOsProfileWindowsConfig.builder()
//  .additionalUnattendConfig(IResolvable)
//  .additionalUnattendConfig(java.util.List<VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig>)
//  .enableAutomaticUpgrades(java.lang.Boolean)
//  .enableAutomaticUpgrades(IResolvable)
//  .provisionVmAgent(java.lang.Boolean)
//  .provisionVmAgent(IResolvable)
//  .timezone(java.lang.String)
//  .winrm(IResolvable)
//  .winrm(java.util.List<VirtualMachineOsProfileWindowsConfigWinrm>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.additionalUnattendConfig">additionalUnattendConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>></code> | additional_unattend_config block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.enableAutomaticUpgrades">enableAutomaticUpgrades</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#enable_automatic_upgrades VirtualMachine#enable_automatic_upgrades}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.provisionVmAgent">provisionVmAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#provision_vm_agent VirtualMachine#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#timezone VirtualMachine#timezone}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.winrm">winrm</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>></code> | winrm block. |

---

##### `additionalUnattendConfig`<sup>Optional</sup> <a name="additionalUnattendConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.additionalUnattendConfig"></a>

```java
public java.lang.Object getAdditionalUnattendConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>>

additional_unattend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#additional_unattend_config VirtualMachine#additional_unattend_config}

---

##### `enableAutomaticUpgrades`<sup>Optional</sup> <a name="enableAutomaticUpgrades" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.enableAutomaticUpgrades"></a>

```java
public java.lang.Object getEnableAutomaticUpgrades();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#enable_automatic_upgrades VirtualMachine#enable_automatic_upgrades}.

---

##### `provisionVmAgent`<sup>Optional</sup> <a name="provisionVmAgent" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.provisionVmAgent"></a>

```java
public java.lang.Object getProvisionVmAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#provision_vm_agent VirtualMachine#provision_vm_agent}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#timezone VirtualMachine#timezone}.

---

##### `winrm`<sup>Optional</sup> <a name="winrm" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.winrm"></a>

```java
public java.lang.Object getWinrm();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>>

winrm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#winrm VirtualMachine#winrm}

---

### VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig <a name="VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig;

VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.builder()
    .component(java.lang.String)
    .content(java.lang.String)
    .pass(java.lang.String)
    .settingName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.component">component</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#component VirtualMachine#component}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#content VirtualMachine#content}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.pass">pass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#pass VirtualMachine#pass}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.settingName">settingName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#setting_name VirtualMachine#setting_name}. |

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.component"></a>

```java
public java.lang.String getComponent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#component VirtualMachine#component}.

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#content VirtualMachine#content}.

---

##### `pass`<sup>Required</sup> <a name="pass" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.pass"></a>

```java
public java.lang.String getPass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#pass VirtualMachine#pass}.

---

##### `settingName`<sup>Required</sup> <a name="settingName" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.settingName"></a>

```java
public java.lang.String getSettingName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#setting_name VirtualMachine#setting_name}.

---

### VirtualMachineOsProfileWindowsConfigWinrm <a name="VirtualMachineOsProfileWindowsConfigWinrm" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileWindowsConfigWinrm;

VirtualMachineOsProfileWindowsConfigWinrm.builder()
    .protocol(java.lang.String)
//  .certificateUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#protocol VirtualMachine#protocol}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm.property.certificateUrl">certificateUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#certificate_url VirtualMachine#certificate_url}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#protocol VirtualMachine#protocol}.

---

##### `certificateUrl`<sup>Optional</sup> <a name="certificateUrl" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm.property.certificateUrl"></a>

```java
public java.lang.String getCertificateUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#certificate_url VirtualMachine#certificate_url}.

---

### VirtualMachinePlan <a name="VirtualMachinePlan" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachinePlan;

VirtualMachinePlan.builder()
    .name(java.lang.String)
    .product(java.lang.String)
    .publisher(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan.property.product">product</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#product VirtualMachine#product}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#product VirtualMachine#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}.

---

### VirtualMachineStorageDataDisk <a name="VirtualMachineStorageDataDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineStorageDataDisk;

VirtualMachineStorageDataDisk.builder()
    .createOption(java.lang.String)
    .lun(java.lang.Number)
    .name(java.lang.String)
//  .caching(java.lang.String)
//  .diskSizeGb(java.lang.Number)
//  .managedDiskId(java.lang.String)
//  .managedDiskType(java.lang.String)
//  .vhdUri(java.lang.String)
//  .writeAcceleratorEnabled(java.lang.Boolean)
//  .writeAcceleratorEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.createOption">createOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#create_option VirtualMachine#create_option}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.lun">lun</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#lun VirtualMachine#lun}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.caching">caching</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#caching VirtualMachine#caching}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#disk_size_gb VirtualMachine#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.managedDiskId">managedDiskId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_id VirtualMachine#managed_disk_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.managedDiskType">managedDiskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_type VirtualMachine#managed_disk_type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.vhdUri">vhdUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vhd_uri VirtualMachine#vhd_uri}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}. |

---

##### `createOption`<sup>Required</sup> <a name="createOption" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.createOption"></a>

```java
public java.lang.String getCreateOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#create_option VirtualMachine#create_option}.

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.lun"></a>

```java
public java.lang.Number getLun();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#lun VirtualMachine#lun}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.caching"></a>

```java
public java.lang.String getCaching();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#caching VirtualMachine#caching}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#disk_size_gb VirtualMachine#disk_size_gb}.

---

##### `managedDiskId`<sup>Optional</sup> <a name="managedDiskId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.managedDiskId"></a>

```java
public java.lang.String getManagedDiskId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_id VirtualMachine#managed_disk_id}.

---

##### `managedDiskType`<sup>Optional</sup> <a name="managedDiskType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.managedDiskType"></a>

```java
public java.lang.String getManagedDiskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_type VirtualMachine#managed_disk_type}.

---

##### `vhdUri`<sup>Optional</sup> <a name="vhdUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.vhdUri"></a>

```java
public java.lang.String getVhdUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vhd_uri VirtualMachine#vhd_uri}.

---

##### `writeAcceleratorEnabled`<sup>Optional</sup> <a name="writeAcceleratorEnabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.writeAcceleratorEnabled"></a>

```java
public java.lang.Object getWriteAcceleratorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}.

---

### VirtualMachineStorageImageReference <a name="VirtualMachineStorageImageReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineStorageImageReference;

VirtualMachineStorageImageReference.builder()
//  .id(java.lang.String)
//  .offer(java.lang.String)
//  .publisher(java.lang.String)
//  .sku(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#id VirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.offer">offer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#offer VirtualMachine#offer}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#sku VirtualMachine#sku}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#version VirtualMachine#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offer`<sup>Optional</sup> <a name="offer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#offer VirtualMachine#offer}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#sku VirtualMachine#sku}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#version VirtualMachine#version}.

---

### VirtualMachineStorageOsDisk <a name="VirtualMachineStorageOsDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineStorageOsDisk;

VirtualMachineStorageOsDisk.builder()
    .createOption(java.lang.String)
    .name(java.lang.String)
//  .caching(java.lang.String)
//  .diskSizeGb(java.lang.Number)
//  .imageUri(java.lang.String)
//  .managedDiskId(java.lang.String)
//  .managedDiskType(java.lang.String)
//  .osType(java.lang.String)
//  .vhdUri(java.lang.String)
//  .writeAcceleratorEnabled(java.lang.Boolean)
//  .writeAcceleratorEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.createOption">createOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#create_option VirtualMachine#create_option}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.caching">caching</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#caching VirtualMachine#caching}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#disk_size_gb VirtualMachine#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#image_uri VirtualMachine#image_uri}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.managedDiskId">managedDiskId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_id VirtualMachine#managed_disk_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.managedDiskType">managedDiskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_type VirtualMachine#managed_disk_type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_type VirtualMachine#os_type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.vhdUri">vhdUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vhd_uri VirtualMachine#vhd_uri}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}. |

---

##### `createOption`<sup>Required</sup> <a name="createOption" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.createOption"></a>

```java
public java.lang.String getCreateOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#create_option VirtualMachine#create_option}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.caching"></a>

```java
public java.lang.String getCaching();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#caching VirtualMachine#caching}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#disk_size_gb VirtualMachine#disk_size_gb}.

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#image_uri VirtualMachine#image_uri}.

---

##### `managedDiskId`<sup>Optional</sup> <a name="managedDiskId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.managedDiskId"></a>

```java
public java.lang.String getManagedDiskId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_id VirtualMachine#managed_disk_id}.

---

##### `managedDiskType`<sup>Optional</sup> <a name="managedDiskType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.managedDiskType"></a>

```java
public java.lang.String getManagedDiskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_type VirtualMachine#managed_disk_type}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_type VirtualMachine#os_type}.

---

##### `vhdUri`<sup>Optional</sup> <a name="vhdUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.vhdUri"></a>

```java
public java.lang.String getVhdUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vhd_uri VirtualMachine#vhd_uri}.

---

##### `writeAcceleratorEnabled`<sup>Optional</sup> <a name="writeAcceleratorEnabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.writeAcceleratorEnabled"></a>

```java
public java.lang.Object getWriteAcceleratorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}.

---

### VirtualMachineTimeouts <a name="VirtualMachineTimeouts" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineTimeouts;

VirtualMachineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#create VirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete VirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#read VirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#update VirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#create VirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete VirtualMachine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#read VirtualMachine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#update VirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineBootDiagnosticsOutputReference <a name="VirtualMachineBootDiagnosticsOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineBootDiagnosticsOutputReference;

new VirtualMachineBootDiagnosticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.storageUriInput">storageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.storageUri">storageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageUriInput`<sup>Optional</sup> <a name="storageUriInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.storageUriInput"></a>

```java
public java.lang.String getStorageUriInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageUri`<sup>Required</sup> <a name="storageUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.storageUri"></a>

```java
public java.lang.String getStorageUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.internalValue"></a>

```java
public VirtualMachineBootDiagnostics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a>

---


### VirtualMachineIdentityOutputReference <a name="VirtualMachineIdentityOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineIdentityOutputReference;

new VirtualMachineIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.internalValue"></a>

```java
public VirtualMachineIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a>

---


### VirtualMachineOsProfileLinuxConfigOutputReference <a name="VirtualMachineOsProfileLinuxConfigOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileLinuxConfigOutputReference;

new VirtualMachineOsProfileLinuxConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.putSshKeys">putSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSshKeys` <a name="putSshKeys" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.putSshKeys"></a>

```java
public void putSshKeys(IResolvable OR java.util.List<VirtualMachineOsProfileLinuxConfigSshKeys> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.putSshKeys.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>>

---

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.resetSshKeys"></a>

```java
public void resetSshKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.sshKeys">sshKeys</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList">VirtualMachineOsProfileLinuxConfigSshKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.disablePasswordAuthenticationInput">disablePasswordAuthenticationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.disablePasswordAuthentication">disablePasswordAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.sshKeys"></a>

```java
public VirtualMachineOsProfileLinuxConfigSshKeysList getSshKeys();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList">VirtualMachineOsProfileLinuxConfigSshKeysList</a>

---

##### `disablePasswordAuthenticationInput`<sup>Optional</sup> <a name="disablePasswordAuthenticationInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.disablePasswordAuthenticationInput"></a>

```java
public java.lang.Object getDisablePasswordAuthenticationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.sshKeysInput"></a>

```java
public java.lang.Object getSshKeysInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>>

---

##### `disablePasswordAuthentication`<sup>Required</sup> <a name="disablePasswordAuthentication" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.disablePasswordAuthentication"></a>

```java
public java.lang.Object getDisablePasswordAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.internalValue"></a>

```java
public VirtualMachineOsProfileLinuxConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a>

---


### VirtualMachineOsProfileLinuxConfigSshKeysList <a name="VirtualMachineOsProfileLinuxConfigSshKeysList" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileLinuxConfigSshKeysList;

new VirtualMachineOsProfileLinuxConfigSshKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.get"></a>

```java
public VirtualMachineOsProfileLinuxConfigSshKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>>

---


### VirtualMachineOsProfileLinuxConfigSshKeysOutputReference <a name="VirtualMachineOsProfileLinuxConfigSshKeysOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference;

new VirtualMachineOsProfileLinuxConfigSshKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.keyDataInput">keyDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.keyData">keyData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyDataInput`<sup>Optional</sup> <a name="keyDataInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.keyDataInput"></a>

```java
public java.lang.String getKeyDataInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `keyData`<sup>Required</sup> <a name="keyData" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.keyData"></a>

```java
public java.lang.String getKeyData();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>

---


### VirtualMachineOsProfileOutputReference <a name="VirtualMachineOsProfileOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileOutputReference;

new VirtualMachineOsProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.resetCustomData">resetCustomData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.resetAdminPassword"></a>

```java
public void resetAdminPassword()
```

##### `resetCustomData` <a name="resetCustomData" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.resetCustomData"></a>

```java
public void resetCustomData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminUsernameInput">adminUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.computerNameInput">computerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.customDataInput">customDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.computerName">computerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.customData">customData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminUsernameInput"></a>

```java
public java.lang.String getAdminUsernameInput();
```

- *Type:* java.lang.String

---

##### `computerNameInput`<sup>Optional</sup> <a name="computerNameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.computerNameInput"></a>

```java
public java.lang.String getComputerNameInput();
```

- *Type:* java.lang.String

---

##### `customDataInput`<sup>Optional</sup> <a name="customDataInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.customDataInput"></a>

```java
public java.lang.String getCustomDataInput();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

---

##### `customData`<sup>Required</sup> <a name="customData" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.internalValue"></a>

```java
public VirtualMachineOsProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a>

---


### VirtualMachineOsProfileSecretsList <a name="VirtualMachineOsProfileSecretsList" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileSecretsList;

new VirtualMachineOsProfileSecretsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.get"></a>

```java
public VirtualMachineOsProfileSecretsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>>

---


### VirtualMachineOsProfileSecretsOutputReference <a name="VirtualMachineOsProfileSecretsOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileSecretsOutputReference;

new VirtualMachineOsProfileSecretsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.putVaultCertificates">putVaultCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.resetVaultCertificates">resetVaultCertificates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVaultCertificates` <a name="putVaultCertificates" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.putVaultCertificates"></a>

```java
public void putVaultCertificates(IResolvable OR java.util.List<VirtualMachineOsProfileSecretsVaultCertificates> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.putVaultCertificates.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>>

---

##### `resetVaultCertificates` <a name="resetVaultCertificates" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.resetVaultCertificates"></a>

```java
public void resetVaultCertificates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.vaultCertificates">vaultCertificates</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList">VirtualMachineOsProfileSecretsVaultCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.sourceVaultIdInput">sourceVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.vaultCertificatesInput">vaultCertificatesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.sourceVaultId">sourceVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vaultCertificates`<sup>Required</sup> <a name="vaultCertificates" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.vaultCertificates"></a>

```java
public VirtualMachineOsProfileSecretsVaultCertificatesList getVaultCertificates();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList">VirtualMachineOsProfileSecretsVaultCertificatesList</a>

---

##### `sourceVaultIdInput`<sup>Optional</sup> <a name="sourceVaultIdInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.sourceVaultIdInput"></a>

```java
public java.lang.String getSourceVaultIdInput();
```

- *Type:* java.lang.String

---

##### `vaultCertificatesInput`<sup>Optional</sup> <a name="vaultCertificatesInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.vaultCertificatesInput"></a>

```java
public java.lang.Object getVaultCertificatesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>>

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.sourceVaultId"></a>

```java
public java.lang.String getSourceVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>

---


### VirtualMachineOsProfileSecretsVaultCertificatesList <a name="VirtualMachineOsProfileSecretsVaultCertificatesList" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileSecretsVaultCertificatesList;

new VirtualMachineOsProfileSecretsVaultCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.get"></a>

```java
public VirtualMachineOsProfileSecretsVaultCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>>

---


### VirtualMachineOsProfileSecretsVaultCertificatesOutputReference <a name="VirtualMachineOsProfileSecretsVaultCertificatesOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference;

new VirtualMachineOsProfileSecretsVaultCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.resetCertificateStore">resetCertificateStore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateStore` <a name="resetCertificateStore" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.resetCertificateStore"></a>

```java
public void resetCertificateStore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateStoreInput">certificateStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrlInput">certificateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateStore">certificateStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrl">certificateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateStoreInput`<sup>Optional</sup> <a name="certificateStoreInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateStoreInput"></a>

```java
public java.lang.String getCertificateStoreInput();
```

- *Type:* java.lang.String

---

##### `certificateUrlInput`<sup>Optional</sup> <a name="certificateUrlInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrlInput"></a>

```java
public java.lang.String getCertificateUrlInput();
```

- *Type:* java.lang.String

---

##### `certificateStore`<sup>Required</sup> <a name="certificateStore" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateStore"></a>

```java
public java.lang.String getCertificateStore();
```

- *Type:* java.lang.String

---

##### `certificateUrl`<sup>Required</sup> <a name="certificateUrl" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrl"></a>

```java
public java.lang.String getCertificateUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>

---


### VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList <a name="VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList;

new VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.get"></a>

```java
public VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>>

---


### VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference <a name="VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference;

new VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.componentInput">componentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.passInput">passInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingNameInput">settingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.component">component</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.pass">pass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingName">settingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `componentInput`<sup>Optional</sup> <a name="componentInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.componentInput"></a>

```java
public java.lang.String getComponentInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `passInput`<sup>Optional</sup> <a name="passInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.passInput"></a>

```java
public java.lang.String getPassInput();
```

- *Type:* java.lang.String

---

##### `settingNameInput`<sup>Optional</sup> <a name="settingNameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingNameInput"></a>

```java
public java.lang.String getSettingNameInput();
```

- *Type:* java.lang.String

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.component"></a>

```java
public java.lang.String getComponent();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `pass`<sup>Required</sup> <a name="pass" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.pass"></a>

```java
public java.lang.String getPass();
```

- *Type:* java.lang.String

---

##### `settingName`<sup>Required</sup> <a name="settingName" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingName"></a>

```java
public java.lang.String getSettingName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>

---


### VirtualMachineOsProfileWindowsConfigOutputReference <a name="VirtualMachineOsProfileWindowsConfigOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileWindowsConfigOutputReference;

new VirtualMachineOsProfileWindowsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putAdditionalUnattendConfig">putAdditionalUnattendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putWinrm">putWinrm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetAdditionalUnattendConfig">resetAdditionalUnattendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetEnableAutomaticUpgrades">resetEnableAutomaticUpgrades</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetProvisionVmAgent">resetProvisionVmAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetWinrm">resetWinrm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalUnattendConfig` <a name="putAdditionalUnattendConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putAdditionalUnattendConfig"></a>

```java
public void putAdditionalUnattendConfig(IResolvable OR java.util.List<VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putAdditionalUnattendConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>>

---

##### `putWinrm` <a name="putWinrm" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putWinrm"></a>

```java
public void putWinrm(IResolvable OR java.util.List<VirtualMachineOsProfileWindowsConfigWinrm> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putWinrm.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>>

---

##### `resetAdditionalUnattendConfig` <a name="resetAdditionalUnattendConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetAdditionalUnattendConfig"></a>

```java
public void resetAdditionalUnattendConfig()
```

##### `resetEnableAutomaticUpgrades` <a name="resetEnableAutomaticUpgrades" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetEnableAutomaticUpgrades"></a>

```java
public void resetEnableAutomaticUpgrades()
```

##### `resetProvisionVmAgent` <a name="resetProvisionVmAgent" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetProvisionVmAgent"></a>

```java
public void resetProvisionVmAgent()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetWinrm` <a name="resetWinrm" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetWinrm"></a>

```java
public void resetWinrm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.additionalUnattendConfig">additionalUnattendConfig</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.winrm">winrm</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList">VirtualMachineOsProfileWindowsConfigWinrmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.additionalUnattendConfigInput">additionalUnattendConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgradesInput">enableAutomaticUpgradesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.provisionVmAgentInput">provisionVmAgentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.winrmInput">winrmInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgrades">enableAutomaticUpgrades</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.provisionVmAgent">provisionVmAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalUnattendConfig`<sup>Required</sup> <a name="additionalUnattendConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.additionalUnattendConfig"></a>

```java
public VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList getAdditionalUnattendConfig();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList</a>

---

##### `winrm`<sup>Required</sup> <a name="winrm" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.winrm"></a>

```java
public VirtualMachineOsProfileWindowsConfigWinrmList getWinrm();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList">VirtualMachineOsProfileWindowsConfigWinrmList</a>

---

##### `additionalUnattendConfigInput`<sup>Optional</sup> <a name="additionalUnattendConfigInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.additionalUnattendConfigInput"></a>

```java
public java.lang.Object getAdditionalUnattendConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>>

---

##### `enableAutomaticUpgradesInput`<sup>Optional</sup> <a name="enableAutomaticUpgradesInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgradesInput"></a>

```java
public java.lang.Object getEnableAutomaticUpgradesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `provisionVmAgentInput`<sup>Optional</sup> <a name="provisionVmAgentInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.provisionVmAgentInput"></a>

```java
public java.lang.Object getProvisionVmAgentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `winrmInput`<sup>Optional</sup> <a name="winrmInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.winrmInput"></a>

```java
public java.lang.Object getWinrmInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>>

---

##### `enableAutomaticUpgrades`<sup>Required</sup> <a name="enableAutomaticUpgrades" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgrades"></a>

```java
public java.lang.Object getEnableAutomaticUpgrades();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `provisionVmAgent`<sup>Required</sup> <a name="provisionVmAgent" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.provisionVmAgent"></a>

```java
public java.lang.Object getProvisionVmAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.internalValue"></a>

```java
public VirtualMachineOsProfileWindowsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a>

---


### VirtualMachineOsProfileWindowsConfigWinrmList <a name="VirtualMachineOsProfileWindowsConfigWinrmList" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileWindowsConfigWinrmList;

new VirtualMachineOsProfileWindowsConfigWinrmList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.get"></a>

```java
public VirtualMachineOsProfileWindowsConfigWinrmOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>>

---


### VirtualMachineOsProfileWindowsConfigWinrmOutputReference <a name="VirtualMachineOsProfileWindowsConfigWinrmOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference;

new VirtualMachineOsProfileWindowsConfigWinrmOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.resetCertificateUrl">resetCertificateUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateUrl` <a name="resetCertificateUrl" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.resetCertificateUrl"></a>

```java
public void resetCertificateUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.certificateUrlInput">certificateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.certificateUrl">certificateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateUrlInput`<sup>Optional</sup> <a name="certificateUrlInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.certificateUrlInput"></a>

```java
public java.lang.String getCertificateUrlInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `certificateUrl`<sup>Required</sup> <a name="certificateUrl" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.certificateUrl"></a>

```java
public java.lang.String getCertificateUrl();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>

---


### VirtualMachinePlanOutputReference <a name="VirtualMachinePlanOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachinePlanOutputReference;

new VirtualMachinePlanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.productInput">productInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.product">product</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.productInput"></a>

```java
public java.lang.String getProductInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.internalValue"></a>

```java
public VirtualMachinePlan getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a>

---


### VirtualMachineStorageDataDiskList <a name="VirtualMachineStorageDataDiskList" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineStorageDataDiskList;

new VirtualMachineStorageDataDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.get"></a>

```java
public VirtualMachineStorageDataDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>>

---


### VirtualMachineStorageDataDiskOutputReference <a name="VirtualMachineStorageDataDiskOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineStorageDataDiskOutputReference;

new VirtualMachineStorageDataDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetCaching">resetCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetManagedDiskId">resetManagedDiskId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetManagedDiskType">resetManagedDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetVhdUri">resetVhdUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetWriteAcceleratorEnabled">resetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaching` <a name="resetCaching" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetCaching"></a>

```java
public void resetCaching()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetManagedDiskId` <a name="resetManagedDiskId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetManagedDiskId"></a>

```java
public void resetManagedDiskId()
```

##### `resetManagedDiskType` <a name="resetManagedDiskType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetManagedDiskType"></a>

```java
public void resetManagedDiskType()
```

##### `resetVhdUri` <a name="resetVhdUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetVhdUri"></a>

```java
public void resetVhdUri()
```

##### `resetWriteAcceleratorEnabled` <a name="resetWriteAcceleratorEnabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```java
public void resetWriteAcceleratorEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.cachingInput">cachingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.createOptionInput">createOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.lunInput">lunInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskIdInput">managedDiskIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskTypeInput">managedDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.vhdUriInput">vhdUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.writeAcceleratorEnabledInput">writeAcceleratorEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.caching">caching</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.createOption">createOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.lun">lun</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskId">managedDiskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskType">managedDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.vhdUri">vhdUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachingInput`<sup>Optional</sup> <a name="cachingInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.cachingInput"></a>

```java
public java.lang.String getCachingInput();
```

- *Type:* java.lang.String

---

##### `createOptionInput`<sup>Optional</sup> <a name="createOptionInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.createOptionInput"></a>

```java
public java.lang.String getCreateOptionInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `lunInput`<sup>Optional</sup> <a name="lunInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.lunInput"></a>

```java
public java.lang.Number getLunInput();
```

- *Type:* java.lang.Number

---

##### `managedDiskIdInput`<sup>Optional</sup> <a name="managedDiskIdInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskIdInput"></a>

```java
public java.lang.String getManagedDiskIdInput();
```

- *Type:* java.lang.String

---

##### `managedDiskTypeInput`<sup>Optional</sup> <a name="managedDiskTypeInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskTypeInput"></a>

```java
public java.lang.String getManagedDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `vhdUriInput`<sup>Optional</sup> <a name="vhdUriInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.vhdUriInput"></a>

```java
public java.lang.String getVhdUriInput();
```

- *Type:* java.lang.String

---

##### `writeAcceleratorEnabledInput`<sup>Optional</sup> <a name="writeAcceleratorEnabledInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```java
public java.lang.Object getWriteAcceleratorEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.caching"></a>

```java
public java.lang.String getCaching();
```

- *Type:* java.lang.String

---

##### `createOption`<sup>Required</sup> <a name="createOption" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.createOption"></a>

```java
public java.lang.String getCreateOption();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.lun"></a>

```java
public java.lang.Number getLun();
```

- *Type:* java.lang.Number

---

##### `managedDiskId`<sup>Required</sup> <a name="managedDiskId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskId"></a>

```java
public java.lang.String getManagedDiskId();
```

- *Type:* java.lang.String

---

##### `managedDiskType`<sup>Required</sup> <a name="managedDiskType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskType"></a>

```java
public java.lang.String getManagedDiskType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `vhdUri`<sup>Required</sup> <a name="vhdUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.vhdUri"></a>

```java
public java.lang.String getVhdUri();
```

- *Type:* java.lang.String

---

##### `writeAcceleratorEnabled`<sup>Required</sup> <a name="writeAcceleratorEnabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.writeAcceleratorEnabled"></a>

```java
public java.lang.Object getWriteAcceleratorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>

---


### VirtualMachineStorageImageReferenceOutputReference <a name="VirtualMachineStorageImageReferenceOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineStorageImageReferenceOutputReference;

new VirtualMachineStorageImageReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetOffer">resetOffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetPublisher">resetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetSku">resetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetOffer` <a name="resetOffer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetOffer"></a>

```java
public void resetOffer()
```

##### `resetPublisher` <a name="resetPublisher" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetPublisher"></a>

```java
public void resetPublisher()
```

##### `resetSku` <a name="resetSku" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetSku"></a>

```java
public void resetSku()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.offerInput">offerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.offer">offer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.offerInput"></a>

```java
public java.lang.String getOfferInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.internalValue"></a>

```java
public VirtualMachineStorageImageReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a>

---


### VirtualMachineStorageOsDiskOutputReference <a name="VirtualMachineStorageOsDiskOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineStorageOsDiskOutputReference;

new VirtualMachineStorageOsDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetCaching">resetCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetManagedDiskId">resetManagedDiskId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetManagedDiskType">resetManagedDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetVhdUri">resetVhdUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetWriteAcceleratorEnabled">resetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaching` <a name="resetCaching" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetCaching"></a>

```java
public void resetCaching()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetImageUri"></a>

```java
public void resetImageUri()
```

##### `resetManagedDiskId` <a name="resetManagedDiskId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetManagedDiskId"></a>

```java
public void resetManagedDiskId()
```

##### `resetManagedDiskType` <a name="resetManagedDiskType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetManagedDiskType"></a>

```java
public void resetManagedDiskType()
```

##### `resetOsType` <a name="resetOsType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetOsType"></a>

```java
public void resetOsType()
```

##### `resetVhdUri` <a name="resetVhdUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetVhdUri"></a>

```java
public void resetVhdUri()
```

##### `resetWriteAcceleratorEnabled` <a name="resetWriteAcceleratorEnabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```java
public void resetWriteAcceleratorEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.cachingInput">cachingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.createOptionInput">createOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskIdInput">managedDiskIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskTypeInput">managedDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.vhdUriInput">vhdUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.writeAcceleratorEnabledInput">writeAcceleratorEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.caching">caching</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.createOption">createOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskId">managedDiskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskType">managedDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.vhdUri">vhdUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachingInput`<sup>Optional</sup> <a name="cachingInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.cachingInput"></a>

```java
public java.lang.String getCachingInput();
```

- *Type:* java.lang.String

---

##### `createOptionInput`<sup>Optional</sup> <a name="createOptionInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.createOptionInput"></a>

```java
public java.lang.String getCreateOptionInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `managedDiskIdInput`<sup>Optional</sup> <a name="managedDiskIdInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskIdInput"></a>

```java
public java.lang.String getManagedDiskIdInput();
```

- *Type:* java.lang.String

---

##### `managedDiskTypeInput`<sup>Optional</sup> <a name="managedDiskTypeInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskTypeInput"></a>

```java
public java.lang.String getManagedDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `vhdUriInput`<sup>Optional</sup> <a name="vhdUriInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.vhdUriInput"></a>

```java
public java.lang.String getVhdUriInput();
```

- *Type:* java.lang.String

---

##### `writeAcceleratorEnabledInput`<sup>Optional</sup> <a name="writeAcceleratorEnabledInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```java
public java.lang.Object getWriteAcceleratorEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.caching"></a>

```java
public java.lang.String getCaching();
```

- *Type:* java.lang.String

---

##### `createOption`<sup>Required</sup> <a name="createOption" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.createOption"></a>

```java
public java.lang.String getCreateOption();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `managedDiskId`<sup>Required</sup> <a name="managedDiskId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskId"></a>

```java
public java.lang.String getManagedDiskId();
```

- *Type:* java.lang.String

---

##### `managedDiskType`<sup>Required</sup> <a name="managedDiskType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskType"></a>

```java
public java.lang.String getManagedDiskType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `vhdUri`<sup>Required</sup> <a name="vhdUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.vhdUri"></a>

```java
public java.lang.String getVhdUri();
```

- *Type:* java.lang.String

---

##### `writeAcceleratorEnabled`<sup>Required</sup> <a name="writeAcceleratorEnabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```java
public java.lang.Object getWriteAcceleratorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.internalValue"></a>

```java
public VirtualMachineStorageOsDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a>

---


### VirtualMachineTimeoutsOutputReference <a name="VirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine.VirtualMachineTimeoutsOutputReference;

new VirtualMachineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a>

---



