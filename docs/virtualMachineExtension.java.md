# `virtualMachineExtension` Submodule <a name="`virtualMachineExtension` Submodule" id="@cdktf/provider-azurestack.virtualMachineExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineExtension <a name="VirtualMachineExtension" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension azurestack_virtual_machine_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine_extension.VirtualMachineExtension;

VirtualMachineExtension.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .publisher(java.lang.String)
    .type(java.lang.String)
    .typeHandlerVersion(java.lang.String)
    .virtualMachineId(java.lang.String)
//  .autoUpgradeMinorVersion(java.lang.Boolean)
//  .autoUpgradeMinorVersion(IResolvable)
//  .id(java.lang.String)
//  .protectedSettings(java.lang.String)
//  .settings(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualMachineExtensionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#name VirtualMachineExtension#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#publisher VirtualMachineExtension#publisher}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#type VirtualMachineExtension#type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.typeHandlerVersion">typeHandlerVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#type_handler_version VirtualMachineExtension#type_handler_version}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#virtual_machine_id VirtualMachineExtension#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.autoUpgradeMinorVersion">autoUpgradeMinorVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#auto_upgrade_minor_version VirtualMachineExtension#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#id VirtualMachineExtension#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.protectedSettings">protectedSettings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#protected_settings VirtualMachineExtension#protected_settings}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.settings">settings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#settings VirtualMachineExtension#settings}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#tags VirtualMachineExtension#tags}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#name VirtualMachineExtension#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.publisher"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#publisher VirtualMachineExtension#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#type VirtualMachineExtension#type}.

---

##### `typeHandlerVersion`<sup>Required</sup> <a name="typeHandlerVersion" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.typeHandlerVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#type_handler_version VirtualMachineExtension#type_handler_version}.

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.virtualMachineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#virtual_machine_id VirtualMachineExtension#virtual_machine_id}.

---

##### `autoUpgradeMinorVersion`<sup>Optional</sup> <a name="autoUpgradeMinorVersion" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.autoUpgradeMinorVersion"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#auto_upgrade_minor_version VirtualMachineExtension#auto_upgrade_minor_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#id VirtualMachineExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protectedSettings`<sup>Optional</sup> <a name="protectedSettings" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.protectedSettings"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#protected_settings VirtualMachineExtension#protected_settings}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.settings"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#settings VirtualMachineExtension#settings}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#tags VirtualMachineExtension#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#timeouts VirtualMachineExtension#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.resetAutoUpgradeMinorVersion">resetAutoUpgradeMinorVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.resetProtectedSettings">resetProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.putTimeouts"></a>

```java
public void putTimeouts(VirtualMachineExtensionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a>

---

##### `resetAutoUpgradeMinorVersion` <a name="resetAutoUpgradeMinorVersion" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.resetAutoUpgradeMinorVersion"></a>

```java
public void resetAutoUpgradeMinorVersion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.resetId"></a>

```java
public void resetId()
```

##### `resetProtectedSettings` <a name="resetProtectedSettings" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.resetProtectedSettings"></a>

```java
public void resetProtectedSettings()
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.resetSettings"></a>

```java
public void resetSettings()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineExtension resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine_extension.VirtualMachineExtension;

VirtualMachineExtension.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine_extension.VirtualMachineExtension;

VirtualMachineExtension.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine_extension.VirtualMachineExtension;

VirtualMachineExtension.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine_extension.VirtualMachineExtension;

VirtualMachineExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualMachineExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VirtualMachineExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualMachineExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualMachineExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference">VirtualMachineExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.autoUpgradeMinorVersionInput">autoUpgradeMinorVersionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.protectedSettingsInput">protectedSettingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.settingsInput">settingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.typeHandlerVersionInput">typeHandlerVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.virtualMachineIdInput">virtualMachineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.autoUpgradeMinorVersion">autoUpgradeMinorVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.protectedSettings">protectedSettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.settings">settings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.typeHandlerVersion">typeHandlerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.timeouts"></a>

```java
public VirtualMachineExtensionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference">VirtualMachineExtensionTimeoutsOutputReference</a>

---

##### `autoUpgradeMinorVersionInput`<sup>Optional</sup> <a name="autoUpgradeMinorVersionInput" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.autoUpgradeMinorVersionInput"></a>

```java
public java.lang.Object getAutoUpgradeMinorVersionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protectedSettingsInput`<sup>Optional</sup> <a name="protectedSettingsInput" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.protectedSettingsInput"></a>

```java
public java.lang.String getProtectedSettingsInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.settingsInput"></a>

```java
public java.lang.String getSettingsInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a>

---

##### `typeHandlerVersionInput`<sup>Optional</sup> <a name="typeHandlerVersionInput" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.typeHandlerVersionInput"></a>

```java
public java.lang.String getTypeHandlerVersionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `virtualMachineIdInput`<sup>Optional</sup> <a name="virtualMachineIdInput" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.virtualMachineIdInput"></a>

```java
public java.lang.String getVirtualMachineIdInput();
```

- *Type:* java.lang.String

---

##### `autoUpgradeMinorVersion`<sup>Required</sup> <a name="autoUpgradeMinorVersion" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.autoUpgradeMinorVersion"></a>

```java
public java.lang.Object getAutoUpgradeMinorVersion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protectedSettings`<sup>Required</sup> <a name="protectedSettings" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.protectedSettings"></a>

```java
public java.lang.String getProtectedSettings();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.settings"></a>

```java
public java.lang.String getSettings();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `typeHandlerVersion`<sup>Required</sup> <a name="typeHandlerVersion" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.typeHandlerVersion"></a>

```java
public java.lang.String getTypeHandlerVersion();
```

- *Type:* java.lang.String

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtension.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineExtensionConfig <a name="VirtualMachineExtensionConfig" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine_extension.VirtualMachineExtensionConfig;

VirtualMachineExtensionConfig.builder()
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
    .name(java.lang.String)
    .publisher(java.lang.String)
    .type(java.lang.String)
    .typeHandlerVersion(java.lang.String)
    .virtualMachineId(java.lang.String)
//  .autoUpgradeMinorVersion(java.lang.Boolean)
//  .autoUpgradeMinorVersion(IResolvable)
//  .id(java.lang.String)
//  .protectedSettings(java.lang.String)
//  .settings(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualMachineExtensionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#name VirtualMachineExtension#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#publisher VirtualMachineExtension#publisher}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#type VirtualMachineExtension#type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.typeHandlerVersion">typeHandlerVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#type_handler_version VirtualMachineExtension#type_handler_version}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#virtual_machine_id VirtualMachineExtension#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.autoUpgradeMinorVersion">autoUpgradeMinorVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#auto_upgrade_minor_version VirtualMachineExtension#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#id VirtualMachineExtension#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.protectedSettings">protectedSettings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#protected_settings VirtualMachineExtension#protected_settings}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.settings">settings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#settings VirtualMachineExtension#settings}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#tags VirtualMachineExtension#tags}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#name VirtualMachineExtension#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#publisher VirtualMachineExtension#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#type VirtualMachineExtension#type}.

---

##### `typeHandlerVersion`<sup>Required</sup> <a name="typeHandlerVersion" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.typeHandlerVersion"></a>

```java
public java.lang.String getTypeHandlerVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#type_handler_version VirtualMachineExtension#type_handler_version}.

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#virtual_machine_id VirtualMachineExtension#virtual_machine_id}.

---

##### `autoUpgradeMinorVersion`<sup>Optional</sup> <a name="autoUpgradeMinorVersion" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.autoUpgradeMinorVersion"></a>

```java
public java.lang.Object getAutoUpgradeMinorVersion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#auto_upgrade_minor_version VirtualMachineExtension#auto_upgrade_minor_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#id VirtualMachineExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protectedSettings`<sup>Optional</sup> <a name="protectedSettings" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.protectedSettings"></a>

```java
public java.lang.String getProtectedSettings();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#protected_settings VirtualMachineExtension#protected_settings}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.settings"></a>

```java
public java.lang.String getSettings();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#settings VirtualMachineExtension#settings}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#tags VirtualMachineExtension#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionConfig.property.timeouts"></a>

```java
public VirtualMachineExtensionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#timeouts VirtualMachineExtension#timeouts}

---

### VirtualMachineExtensionTimeouts <a name="VirtualMachineExtensionTimeouts" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine_extension.VirtualMachineExtensionTimeouts;

VirtualMachineExtensionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#create VirtualMachineExtension#create}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#delete VirtualMachineExtension#delete}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#read VirtualMachineExtension#read}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#update VirtualMachineExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#create VirtualMachineExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#delete VirtualMachineExtension#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#read VirtualMachineExtension#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_extension#update VirtualMachineExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineExtensionTimeoutsOutputReference <a name="VirtualMachineExtensionTimeoutsOutputReference" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.virtual_machine_extension.VirtualMachineExtensionTimeoutsOutputReference;

new VirtualMachineExtensionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurestack.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a>

---



