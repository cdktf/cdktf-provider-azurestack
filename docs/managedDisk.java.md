# `azurestack_managed_disk`

Refer to the Terraform Registory for docs: [`azurestack_managed_disk`](https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk).

# `managedDisk` Submodule <a name="`managedDisk` Submodule" id="@cdktf/provider-azurestack.managedDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDisk <a name="ManagedDisk" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk azurestack_managed_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.managed_disk.ManagedDisk;

ManagedDisk.Builder.create(Construct scope, java.lang.String id)
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
    .createOption(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageAccountType(java.lang.String)
//  .diskSizeGb(java.lang.Number)
//  .encryption(ManagedDiskEncryption)
//  .hyperVGeneration(java.lang.String)
//  .id(java.lang.String)
//  .imageReferenceId(java.lang.String)
//  .osType(java.lang.String)
//  .sourceResourceId(java.lang.String)
//  .sourceUri(java.lang.String)
//  .storageAccountId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ManagedDiskTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.createOption">createOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#create_option ManagedDisk#create_option}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#location ManagedDisk#location}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#name ManagedDisk#name}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#resource_group_name ManagedDisk#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#storage_account_type ManagedDisk#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#disk_size_gb ManagedDisk#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption">ManagedDiskEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.hyperVGeneration">hyperVGeneration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#hyper_v_generation ManagedDisk#hyper_v_generation}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#id ManagedDisk#id}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.imageReferenceId">imageReferenceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#image_reference_id ManagedDisk#image_reference_id}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#os_type ManagedDisk#os_type}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.sourceResourceId">sourceResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#source_resource_id ManagedDisk#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.sourceUri">sourceUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#source_uri ManagedDisk#source_uri}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#storage_account_id ManagedDisk#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#tags ManagedDisk#tags}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createOption`<sup>Required</sup> <a name="createOption" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.createOption"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#create_option ManagedDisk#create_option}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#location ManagedDisk#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#name ManagedDisk#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#resource_group_name ManagedDisk#resource_group_name}.

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.storageAccountType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#storage_account_type ManagedDisk#storage_account_type}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.diskSizeGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#disk_size_gb ManagedDisk#disk_size_gb}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.encryption"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption">ManagedDiskEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#encryption ManagedDisk#encryption}

---

##### `hyperVGeneration`<sup>Optional</sup> <a name="hyperVGeneration" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.hyperVGeneration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#hyper_v_generation ManagedDisk#hyper_v_generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#id ManagedDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageReferenceId`<sup>Optional</sup> <a name="imageReferenceId" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.imageReferenceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#image_reference_id ManagedDisk#image_reference_id}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.osType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#os_type ManagedDisk#os_type}.

---

##### `sourceResourceId`<sup>Optional</sup> <a name="sourceResourceId" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.sourceResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#source_resource_id ManagedDisk#source_resource_id}.

---

##### `sourceUri`<sup>Optional</sup> <a name="sourceUri" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.sourceUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#source_uri ManagedDisk#source_uri}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.storageAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#storage_account_id ManagedDisk#storage_account_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#tags ManagedDisk#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#timeouts ManagedDisk#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetHyperVGeneration">resetHyperVGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetImageReferenceId">resetImageReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetSourceResourceId">resetSourceResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetSourceUri">resetSourceUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetStorageAccountId">resetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEncryption` <a name="putEncryption" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.putEncryption"></a>

```java
public void putEncryption(ManagedDiskEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption">ManagedDiskEncryption</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.putTimeouts"></a>

```java
public void putTimeouts(ManagedDiskTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a>

---

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetHyperVGeneration` <a name="resetHyperVGeneration" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetHyperVGeneration"></a>

```java
public void resetHyperVGeneration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetId"></a>

```java
public void resetId()
```

##### `resetImageReferenceId` <a name="resetImageReferenceId" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetImageReferenceId"></a>

```java
public void resetImageReferenceId()
```

##### `resetOsType` <a name="resetOsType" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetOsType"></a>

```java
public void resetOsType()
```

##### `resetSourceResourceId` <a name="resetSourceResourceId" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetSourceResourceId"></a>

```java
public void resetSourceResourceId()
```

##### `resetSourceUri` <a name="resetSourceUri" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetSourceUri"></a>

```java
public void resetSourceUri()
```

##### `resetStorageAccountId` <a name="resetStorageAccountId" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetStorageAccountId"></a>

```java
public void resetStorageAccountId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.managed_disk.ManagedDisk;

ManagedDisk.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.managed_disk.ManagedDisk;

ManagedDisk.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.managed_disk.ManagedDisk;

ManagedDisk.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference">ManagedDiskEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference">ManagedDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.createOptionInput">createOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.encryptionInput">encryptionInput</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption">ManagedDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.hyperVGenerationInput">hyperVGenerationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.imageReferenceIdInput">imageReferenceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.sourceResourceIdInput">sourceResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.sourceUriInput">sourceUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.createOption">createOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.hyperVGeneration">hyperVGeneration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.imageReferenceId">imageReferenceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.sourceResourceId">sourceResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.sourceUri">sourceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.encryption"></a>

```java
public ManagedDiskEncryptionOutputReference getEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference">ManagedDiskEncryptionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.timeouts"></a>

```java
public ManagedDiskTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference">ManagedDiskTimeoutsOutputReference</a>

---

##### `createOptionInput`<sup>Optional</sup> <a name="createOptionInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.createOptionInput"></a>

```java
public java.lang.String getCreateOptionInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.encryptionInput"></a>

```java
public ManagedDiskEncryption getEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption">ManagedDiskEncryption</a>

---

##### `hyperVGenerationInput`<sup>Optional</sup> <a name="hyperVGenerationInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.hyperVGenerationInput"></a>

```java
public java.lang.String getHyperVGenerationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageReferenceIdInput`<sup>Optional</sup> <a name="imageReferenceIdInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.imageReferenceIdInput"></a>

```java
public java.lang.String getImageReferenceIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sourceResourceIdInput`<sup>Optional</sup> <a name="sourceResourceIdInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.sourceResourceIdInput"></a>

```java
public java.lang.String getSourceResourceIdInput();
```

- *Type:* java.lang.String

---

##### `sourceUriInput`<sup>Optional</sup> <a name="sourceUriInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.sourceUriInput"></a>

```java
public java.lang.String getSourceUriInput();
```

- *Type:* java.lang.String

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.storageAccountTypeInput"></a>

```java
public java.lang.String getStorageAccountTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `createOption`<sup>Required</sup> <a name="createOption" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.createOption"></a>

```java
public java.lang.String getCreateOption();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `hyperVGeneration`<sup>Required</sup> <a name="hyperVGeneration" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.hyperVGeneration"></a>

```java
public java.lang.String getHyperVGeneration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageReferenceId`<sup>Required</sup> <a name="imageReferenceId" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.imageReferenceId"></a>

```java
public java.lang.String getImageReferenceId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sourceResourceId`<sup>Required</sup> <a name="sourceResourceId" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.sourceResourceId"></a>

```java
public java.lang.String getSourceResourceId();
```

- *Type:* java.lang.String

---

##### `sourceUri`<sup>Required</sup> <a name="sourceUri" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.sourceUri"></a>

```java
public java.lang.String getSourceUri();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.managedDisk.ManagedDisk.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDiskConfig <a name="ManagedDiskConfig" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.managed_disk.ManagedDiskConfig;

ManagedDiskConfig.builder()
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
    .createOption(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageAccountType(java.lang.String)
//  .diskSizeGb(java.lang.Number)
//  .encryption(ManagedDiskEncryption)
//  .hyperVGeneration(java.lang.String)
//  .id(java.lang.String)
//  .imageReferenceId(java.lang.String)
//  .osType(java.lang.String)
//  .sourceResourceId(java.lang.String)
//  .sourceUri(java.lang.String)
//  .storageAccountId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ManagedDiskTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.createOption">createOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#create_option ManagedDisk#create_option}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#location ManagedDisk#location}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#name ManagedDisk#name}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#resource_group_name ManagedDisk#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#storage_account_type ManagedDisk#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#disk_size_gb ManagedDisk#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption">ManagedDiskEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.hyperVGeneration">hyperVGeneration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#hyper_v_generation ManagedDisk#hyper_v_generation}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#id ManagedDisk#id}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.imageReferenceId">imageReferenceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#image_reference_id ManagedDisk#image_reference_id}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#os_type ManagedDisk#os_type}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.sourceResourceId">sourceResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#source_resource_id ManagedDisk#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.sourceUri">sourceUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#source_uri ManagedDisk#source_uri}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#storage_account_id ManagedDisk#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#tags ManagedDisk#tags}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createOption`<sup>Required</sup> <a name="createOption" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.createOption"></a>

```java
public java.lang.String getCreateOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#create_option ManagedDisk#create_option}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#location ManagedDisk#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#name ManagedDisk#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#resource_group_name ManagedDisk#resource_group_name}.

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#storage_account_type ManagedDisk#storage_account_type}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#disk_size_gb ManagedDisk#disk_size_gb}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.encryption"></a>

```java
public ManagedDiskEncryption getEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption">ManagedDiskEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#encryption ManagedDisk#encryption}

---

##### `hyperVGeneration`<sup>Optional</sup> <a name="hyperVGeneration" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.hyperVGeneration"></a>

```java
public java.lang.String getHyperVGeneration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#hyper_v_generation ManagedDisk#hyper_v_generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#id ManagedDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageReferenceId`<sup>Optional</sup> <a name="imageReferenceId" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.imageReferenceId"></a>

```java
public java.lang.String getImageReferenceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#image_reference_id ManagedDisk#image_reference_id}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#os_type ManagedDisk#os_type}.

---

##### `sourceResourceId`<sup>Optional</sup> <a name="sourceResourceId" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.sourceResourceId"></a>

```java
public java.lang.String getSourceResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#source_resource_id ManagedDisk#source_resource_id}.

---

##### `sourceUri`<sup>Optional</sup> <a name="sourceUri" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.sourceUri"></a>

```java
public java.lang.String getSourceUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#source_uri ManagedDisk#source_uri}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#storage_account_id ManagedDisk#storage_account_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#tags ManagedDisk#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskConfig.property.timeouts"></a>

```java
public ManagedDiskTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#timeouts ManagedDisk#timeouts}

---

### ManagedDiskEncryption <a name="ManagedDiskEncryption" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.managed_disk.ManagedDiskEncryption;

ManagedDiskEncryption.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .diskEncryptionKey(ManagedDiskEncryptionDiskEncryptionKey)
//  .keyEncryptionKey(ManagedDiskEncryptionKeyEncryptionKey)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#enabled ManagedDisk#enabled}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKey">ManagedDiskEncryptionDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption.property.keyEncryptionKey">keyEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKey">ManagedDiskEncryptionKeyEncryptionKey</a></code> | key_encryption_key block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#enabled ManagedDisk#enabled}.

---

##### `diskEncryptionKey`<sup>Optional</sup> <a name="diskEncryptionKey" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption.property.diskEncryptionKey"></a>

```java
public ManagedDiskEncryptionDiskEncryptionKey getDiskEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKey">ManagedDiskEncryptionDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#disk_encryption_key ManagedDisk#disk_encryption_key}

---

##### `keyEncryptionKey`<sup>Optional</sup> <a name="keyEncryptionKey" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption.property.keyEncryptionKey"></a>

```java
public ManagedDiskEncryptionKeyEncryptionKey getKeyEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKey">ManagedDiskEncryptionKeyEncryptionKey</a>

key_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#key_encryption_key ManagedDisk#key_encryption_key}

---

### ManagedDiskEncryptionDiskEncryptionKey <a name="ManagedDiskEncryptionDiskEncryptionKey" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.managed_disk.ManagedDiskEncryptionDiskEncryptionKey;

ManagedDiskEncryptionDiskEncryptionKey.builder()
    .secretUrl(java.lang.String)
    .sourceVaultId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKey.property.secretUrl">secretUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#secret_url ManagedDisk#secret_url}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKey.property.sourceVaultId">sourceVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#source_vault_id ManagedDisk#source_vault_id}. |

---

##### `secretUrl`<sup>Required</sup> <a name="secretUrl" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKey.property.secretUrl"></a>

```java
public java.lang.String getSecretUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#secret_url ManagedDisk#secret_url}.

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKey.property.sourceVaultId"></a>

```java
public java.lang.String getSourceVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#source_vault_id ManagedDisk#source_vault_id}.

---

### ManagedDiskEncryptionKeyEncryptionKey <a name="ManagedDiskEncryptionKeyEncryptionKey" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.managed_disk.ManagedDiskEncryptionKeyEncryptionKey;

ManagedDiskEncryptionKeyEncryptionKey.builder()
    .keyUrl(java.lang.String)
    .sourceVaultId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKey.property.keyUrl">keyUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#key_url ManagedDisk#key_url}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKey.property.sourceVaultId">sourceVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#source_vault_id ManagedDisk#source_vault_id}. |

---

##### `keyUrl`<sup>Required</sup> <a name="keyUrl" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKey.property.keyUrl"></a>

```java
public java.lang.String getKeyUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#key_url ManagedDisk#key_url}.

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKey.property.sourceVaultId"></a>

```java
public java.lang.String getSourceVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#source_vault_id ManagedDisk#source_vault_id}.

---

### ManagedDiskTimeouts <a name="ManagedDiskTimeouts" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.managed_disk.ManagedDiskTimeouts;

ManagedDiskTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#create ManagedDisk#create}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#delete ManagedDisk#delete}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#read ManagedDisk#read}. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#update ManagedDisk#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#create ManagedDisk#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#delete ManagedDisk#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#read ManagedDisk#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/managed_disk#update ManagedDisk#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDiskEncryptionDiskEncryptionKeyOutputReference <a name="ManagedDiskEncryptionDiskEncryptionKeyOutputReference" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.managed_disk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference;

new ManagedDiskEncryptionDiskEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.property.secretUrlInput">secretUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.property.sourceVaultIdInput">sourceVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.property.secretUrl">secretUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.property.sourceVaultId">sourceVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKey">ManagedDiskEncryptionDiskEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretUrlInput`<sup>Optional</sup> <a name="secretUrlInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.property.secretUrlInput"></a>

```java
public java.lang.String getSecretUrlInput();
```

- *Type:* java.lang.String

---

##### `sourceVaultIdInput`<sup>Optional</sup> <a name="sourceVaultIdInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.property.sourceVaultIdInput"></a>

```java
public java.lang.String getSourceVaultIdInput();
```

- *Type:* java.lang.String

---

##### `secretUrl`<sup>Required</sup> <a name="secretUrl" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.property.secretUrl"></a>

```java
public java.lang.String getSecretUrl();
```

- *Type:* java.lang.String

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.property.sourceVaultId"></a>

```java
public java.lang.String getSourceVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference.property.internalValue"></a>

```java
public ManagedDiskEncryptionDiskEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKey">ManagedDiskEncryptionDiskEncryptionKey</a>

---


### ManagedDiskEncryptionKeyEncryptionKeyOutputReference <a name="ManagedDiskEncryptionKeyEncryptionKeyOutputReference" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.managed_disk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference;

new ManagedDiskEncryptionKeyEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.property.keyUrlInput">keyUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.property.sourceVaultIdInput">sourceVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.property.keyUrl">keyUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.property.sourceVaultId">sourceVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKey">ManagedDiskEncryptionKeyEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyUrlInput`<sup>Optional</sup> <a name="keyUrlInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.property.keyUrlInput"></a>

```java
public java.lang.String getKeyUrlInput();
```

- *Type:* java.lang.String

---

##### `sourceVaultIdInput`<sup>Optional</sup> <a name="sourceVaultIdInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.property.sourceVaultIdInput"></a>

```java
public java.lang.String getSourceVaultIdInput();
```

- *Type:* java.lang.String

---

##### `keyUrl`<sup>Required</sup> <a name="keyUrl" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.property.keyUrl"></a>

```java
public java.lang.String getKeyUrl();
```

- *Type:* java.lang.String

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.property.sourceVaultId"></a>

```java
public java.lang.String getSourceVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference.property.internalValue"></a>

```java
public ManagedDiskEncryptionKeyEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKey">ManagedDiskEncryptionKeyEncryptionKey</a>

---


### ManagedDiskEncryptionOutputReference <a name="ManagedDiskEncryptionOutputReference" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.managed_disk.ManagedDiskEncryptionOutputReference;

new ManagedDiskEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.putDiskEncryptionKey">putDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.putKeyEncryptionKey">putKeyEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.resetDiskEncryptionKey">resetDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.resetKeyEncryptionKey">resetKeyEncryptionKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiskEncryptionKey` <a name="putDiskEncryptionKey" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.putDiskEncryptionKey"></a>

```java
public void putDiskEncryptionKey(ManagedDiskEncryptionDiskEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.putDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKey">ManagedDiskEncryptionDiskEncryptionKey</a>

---

##### `putKeyEncryptionKey` <a name="putKeyEncryptionKey" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.putKeyEncryptionKey"></a>

```java
public void putKeyEncryptionKey(ManagedDiskEncryptionKeyEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.putKeyEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKey">ManagedDiskEncryptionKeyEncryptionKey</a>

---

##### `resetDiskEncryptionKey` <a name="resetDiskEncryptionKey" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.resetDiskEncryptionKey"></a>

```java
public void resetDiskEncryptionKey()
```

##### `resetKeyEncryptionKey` <a name="resetKeyEncryptionKey" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.resetKeyEncryptionKey"></a>

```java
public void resetKeyEncryptionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference">ManagedDiskEncryptionDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.keyEncryptionKey">keyEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference">ManagedDiskEncryptionKeyEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.diskEncryptionKeyInput">diskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKey">ManagedDiskEncryptionDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.keyEncryptionKeyInput">keyEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKey">ManagedDiskEncryptionKeyEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption">ManagedDiskEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKey`<sup>Required</sup> <a name="diskEncryptionKey" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.diskEncryptionKey"></a>

```java
public ManagedDiskEncryptionDiskEncryptionKeyOutputReference getDiskEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKeyOutputReference">ManagedDiskEncryptionDiskEncryptionKeyOutputReference</a>

---

##### `keyEncryptionKey`<sup>Required</sup> <a name="keyEncryptionKey" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.keyEncryptionKey"></a>

```java
public ManagedDiskEncryptionKeyEncryptionKeyOutputReference getKeyEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKeyOutputReference">ManagedDiskEncryptionKeyEncryptionKeyOutputReference</a>

---

##### `diskEncryptionKeyInput`<sup>Optional</sup> <a name="diskEncryptionKeyInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.diskEncryptionKeyInput"></a>

```java
public ManagedDiskEncryptionDiskEncryptionKey getDiskEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionDiskEncryptionKey">ManagedDiskEncryptionDiskEncryptionKey</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyEncryptionKeyInput`<sup>Optional</sup> <a name="keyEncryptionKeyInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.keyEncryptionKeyInput"></a>

```java
public ManagedDiskEncryptionKeyEncryptionKey getKeyEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionKeyEncryptionKey">ManagedDiskEncryptionKeyEncryptionKey</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryptionOutputReference.property.internalValue"></a>

```java
public ManagedDiskEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskEncryption">ManagedDiskEncryption</a>

---


### ManagedDiskTimeoutsOutputReference <a name="ManagedDiskTimeoutsOutputReference" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.managed_disk.ManagedDiskTimeoutsOutputReference;

new ManagedDiskTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



